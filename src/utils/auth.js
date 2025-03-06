import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Function to generate a unique referral code
const generateReferralCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase(); // Random 8-char code
};

// Function to add a new user if the wallet is unique
export const addUserIfNew = async (walletAddress) => {
  try {
    const usersRef = collection(db, "users");

    // Check if the wallet already exists
    const q = query(usersRef, where("wallet", "==", walletAddress));
    const existingUsers = await getDocs(q);

    if (!existingUsers.empty) {
      console.log("User already exists:", walletAddress);
      return existingUsers.docs[0].data(); // Return existing user data
    }

    // Create a referral code
    const referralCode = generateReferralCode();

    // Add the new user to Firestore
    const newUserRef = await addDoc(usersRef, {
      wallet: walletAddress,
      referralCode: referralCode,
      createdAt: new Date(),
    });

    console.log("New user added:", walletAddress);
    return { wallet: walletAddress, referralCode, id: newUserRef.id };
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
};

// Function to get a user's referral link
export const getReferralLink = (referralCode) => {
  return `${window.location.origin}/?ref=${referralCode}`;
};
