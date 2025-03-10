"use client";

import Button from "@/components/Button";
import {
  Header3,
  Header4,
  Header5,
  Paragraph1,
  Paragraph2,
} from "@/components/Text";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { addUserIfNew, getReferralLink } from "@/utils/auth";
import { useWallet } from "@solana/wallet-adapter-react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  arrayUnion,
  increment,
} from "firebase/firestore";

function AirdropSection() {
  const [points, setPoints] = useState<number>(0);
  const [referralLink, setReferralLink] = useState<string>("");
  const { publicKey, connected } = useWallet();
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    if (connected && publicKey) {
      (async () => {
        const walletAddress = publicKey.toString();
        const userQuery = query(collection(db, "users"), where("wallet", "==", walletAddress));
        const userSnapshot = await getDocs(userQuery);

        let user;
        if (userSnapshot.empty) {
          // New user: Add to Firestore
          user = await addUserIfNew(walletAddress);
        } else {
          user = userSnapshot.docs[0].data();
        }

        if (user) {
          setReferralLink(getReferralLink(user.referralCode));
          setPoints(user.balance || 0);
          setTotalPoints(user.totalPoints || 0);
          setCompletedTasks(user.completedTasks || []);
          
          // Handle referral logic
          const urlParams = new URLSearchParams(window.location.search);
          const refCode = urlParams.get("ref");

          if (refCode && user.referralCode !== refCode) {
            // Check if referrer exists
            const refQuery = query(collection(db, "users"), where("referralCode", "==", refCode));
            const refSnapshot = await getDocs(refQuery);

            if (!refSnapshot.empty) {
              const refDoc = refSnapshot.docs[0];
              await updateDoc(doc(db, "users", refDoc.id), {
                referralCount: increment(1),
                balance: increment(200),
              });
            }
          }
        }
      })();
    }
  }, [connected, publicKey]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleTaskClick = async (task: any) => {
    if (!publicKey || completedTasks.includes(task.id)) return;

    const userQuery = query(collection(db, "users"), where("wallet", "==", publicKey.toString()));
    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
      const userDoc = userSnapshot.docs[0];
      await updateDoc(doc(db, "users", userDoc.id), {
        balance: increment(50),
        totalPoints: increment(50),
        completedTasks: arrayUnion(task.id),
      });

      // Update UI instantly
      setPoints((prevPoints) => prevPoints + 50);
      setTotalPoints((prevTotalPoints) => prevTotalPoints + 50);
      setCompletedTasks((prevTasks) => [...prevTasks, task.id]);
    }
  };

  const copyReferral = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const tasks = [
    {
      id: "1",
      title: "Connect your wallet",
      points: 50,
      action: "Connect",
      link: "/",
    },
    {
      id: "2",
      title: "Follow us on Twitter",
      points: 50,
      action: "Follow",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      title: "Join our Discord server",
      points: 50,
      action: "Join",
      link: "https://discord.com/",
    },
    {
      id: "4",
      title: "Retweet our latest tweet",
      points: 50,
      action: "Retweet",
      link: "https://twitter.com/",
    },
    {
      id: "5",
      title: "Invite a friend",
      points: 200,
      action: "Invite",
      link: "/",
    },
  ];


  return (
    <div
      id="airdrop"
      className=" py-[50px] relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740696028/Gemini_Generated_Image_9y1cuw9y1cuw9y1c_twhtdx.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      <div className="container1 text-center" data-aos="fade-up">
        <Header3>
          Earn <span className="text-primary">BRO-CODE Points</span> & Get
          Rewarded!
        </Header3>
        <Paragraph1 className="max-w-[800px] mx-auto mt-4">
          Complete tasks, invite friends, and track your BRO-CODE Points
          balance. More points mean more rewards!
        </Paragraph1>
      </div>
      <div className="container1 mt-12 flex flex-col w-full items-center   ">
        <div className="w-full max-w-[800px] border border-primary p-4 bg-white bg-opacity-30 rounded-lg">
          <Paragraph1 className=" text-gray-400 relative">
            Total BRO-CODE points:
          </Paragraph1>
          <div className="flex  justify-center flex-col  items-center mb-8">
            {" "}
            <div className=" w-full max-w-[800px] flex flex-col items-center rounded-lg bg-secondary bg-opacity-70 p-4 sm:-pb-8 relative">
              <Header4 className=" text-2xl font-bold">
                <span className="text-white">{points}.00</span>{" "}
                <span className=" text-[12px]"> BRO-CODE</span>
              </Header4>
            </div>
            <Paragraph1 className=" text-gray-400 relative">
              (Your reward would be converted to $BRO-CODE and sent directly to
              your connected wallet)
            </Paragraph1>
          </div>{" "}
          <ul className="space-y-4 w-full max-w-[800px]">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-l_green bg-opacity-25 p-4 rounded-lg"
                data-aos="fade-up"
              >
                <div>
                  <Paragraph1>{task.title}</Paragraph1>
                  <Paragraph2 className="mt-1">
                    Earn {task.points} Points
                  </Paragraph2>
                </div>
                <Button
                  text={completedTasks.includes(task.id) ? "Done" : task.action}
                  isLink={true}
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleTaskClick(task)}
                  additionalClasses={`- ${
                    completedTasks.includes(task.id) ? "bg-black" : "bg-"
                  } text-white`}
                  disabled={completedTasks.includes(task.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container1 text-center flex justify-center items-center flex-col mt-8 relative">
        <Header5>Your Referral Link (Earn 200 Points for each invite)</Header5>
        <div
          className="mt-2 bg-gray-800 flex justify-center p-3 rounded-lg inline-block- gap-4 w-fit cursor-pointer"
          onClick={copyReferral}
        >
          {connected ? (
            <>{referralLink}</>
          ) : (
            <p>Connect your wallet to get your referral link.</p>
          )}{" "}
          {/* {referralLink}{" "} */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default AirdropSection;
