"use client";

import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1, ParagraphLink2 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function section6() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      className=" hidden-  relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740725425/nehw_xfpgi4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      <div
        className=" container1 pt-[24px] xl:pt-[100px] text-white"
        data-aos="fade-up"
      >
        {" "}
        <div className=" flex flex-col xl:gap-[24px] items-center w-full text-center pb-[64px]">
          <Header1Plus>
            Join the <span className="text-primary">BRO-CODE</span> Revolution –
            Where Friendship Meets Fun!
          </Header1Plus>
          <Paragraph1 className="max-w-[883px] text-center">
            Be part of a community that celebrates loyalty, camaraderie, and
            epic moments. Send, share, and earn BRO-CODE Coin with your crew!
          </Paragraph1>

          <div className=" flex mt-4 gap-8 items-center">
            <Link href="https://t.me/solanabrocode">
              <img
                src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740863365/telegram_tx8hjr.png"
                alt="telegram"
                className="w-[54px] h-[54px]"
              />
            </Link>
            <Link href="https://x.com/solanabrocode?s=21">
              <img
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729675779/utilities/templates/twitter_3_sihd1i.png"
                alt="X"
                className=" w-[54px] h-[54px]"
              />
            </Link>
          </div>
        </div>
        <div className=" border-t pt-[24px] sm:pt-[32px] flex flex-wrap justify-center">
          <ParagraphLink2 className=" text-[#ECECEC] ">
            © 2024 $BRO-CODE. All rights reserved.
          </ParagraphLink2>
        </div>
      </div>
    </div>
  );
}

export default section6;
