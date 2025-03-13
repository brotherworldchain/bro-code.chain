"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import {
  Header4,
  Header5,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  ParagraphLink1,
} from "@/components/Text";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

// SOLANA SETTINGS
const RPC_URL = process.env.RPC_URL?? "";
const ADMIN_WALLET = process.env.ADMIN_WALLET?? "";

function Section4() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 9,
    minutes: 53,
    seconds: 2,
  });
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState(""); // SOL amount
  const [broAmount, setBroAmount] = useState(""); // $PAMON equivalent
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle transaction when user clicks "Buy"
  const handleBuy = async () => {
    if (!publicKey || !amount)
      return alert("Connect wallet and enter an amount!");

    try {
      setLoading(true);
      const connection = new Connection(RPC_URL, "confirmed");
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(ADMIN_WALLET),
          lamports: parseFloat(amount) * 1e9, // Convert SOL to lamports
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      // Store order details in Firestore
      await addDoc(collection(db, "orders"), {
        wallet: publicKey.toString(),
        amountSOL: parseFloat(amount),
        amountBRO: parseFloat(broAmount),
        txSignature: signature,
        status: "pending", // Admin will process later
        timestamp: new Date(),
      });

      alert("Transaction successful! Your order is pending approval.");
      setAmount("");
      setBroAmount("");
    } catch (error) {
      console.error("Transaction Failed:", error);
      alert("Transaction failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="presale"
      className="  relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740701343/Gemini_Generated_Image_98859q98859q9885_mziixb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      <div className="container1 py-[100px] flex w-full justify-center">
        <div
          className="bg-gradient-to-r w-full max-w-[800px] opacity-60 from-primary to-l_green p-2 rounded-lg text-white mt-12-"
          data-aos="fade-up"
        >
          <div className="bg-secondary p-6 rounded-lg  text-white shadow-lg">
            <Header4 className="text-center ">
              $PAMON Presale is Now Live!
            </Header4>
            <div className="flex justify-center p-4 bg- gap-4 bg-gradient-to-r opacity-60 from-primary to-secondary rounded-lg border mt-4 text-xl font-semibold">
              <div className="flex flex-col items-center">
                <Paragraph2>Days</Paragraph2>
                <Paragraph1>{timeLeft.days}</Paragraph1>
              </div>{" "}
              <div className="flex flex-col items-center">
                <Paragraph2>Hours</Paragraph2>
                <Paragraph1>{timeLeft.hours}</Paragraph1>
              </div>{" "}
              <div className="flex flex-col items-center">
                <Paragraph2>Minutes</Paragraph2>
                <Paragraph1>{timeLeft.minutes}</Paragraph1>
              </div>{" "}
              <div className="flex flex-col items-center">
                <Paragraph2>Seconds</Paragraph2>
                <Paragraph1>{timeLeft.seconds}</Paragraph1>
              </div>{" "}
            </div>
            {/* <div className=" mt-6">
              <Paragraph2 className=" ">Buy with: </Paragraph2>
              <div className="flex justify-cen w-full gap-4 mt-4-">
                <button className="bg-primary border w-full   text-white px-4 py-2 rounded-lg">
                  <img
                    src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740755016/download_1_v4pkcj.png"
                    alt=""
                    className=" h-[40px] rounded-full"
                  />{" "}
                  SOL
                </button>
                <button className=" flex  border w-full text-white px-4 py-2 rounded">
                  <img
                    src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740755016/download_2_gxj2dy.png"
                    alt=""
                    className=" h-[40px] rounded-full"
                  />
                  USDT
                </button>
              </div>
            </div> */}

            <div className="mt-6">
              <Paragraph3 className="block font-medium">You Send:</Paragraph3>
              <div className="border p-4 rounded w-full gap-2 bg-white bg-opacity-10 mt-1 flex items-center">
                <img
                  src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740755016/download_1_v4pkcj.png"
                  alt=""
                  className=" h-[40px] rounded-full"
                />{" "}
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-white bg-opacity-0 outline-none w-full"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    // @ts-ignore
                    setBroAmount(e.target.value * 20000); // Example conversion rate
                  }}
                />
              </div>

              <Paragraph3 className="block font-medium mt-4">
                You Receive:
              </Paragraph3>
              <div className="border p-4 gap-2 rounded w-full bg-white bg-opacity-10 mt-1 flex items-center">
                <img
                  src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740697959/Gemini_Generated_Image_klp71sklp71sklp7logo_eg3j2g.jpg"
                  alt=""
                  className=" h-[40px] rounded-full"
                />{" "}
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-white bg-opacity-0 outline-none w-full"
                  value={broAmount}
                />
              </div>
            </div>
            <button
              onClick={handleBuy}
              disabled={loading}
              className="bg- border hover:bg-primary text-white px-6 py-3 rounded-full w-full mt-6"
            >
              {loading ? "Processing..." : "Buy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
