"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section3() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div
      id="about"
      className="  relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1741895004/fggh_rpahwn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className=" container1 py-[24px] xl:py-[50px] ">
        <div
          className=" flex xl:gap-[24px] flex-col items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>About Us</Header3>
          <Paragraph1 className="max-w-[883px] text-center">
            The Ultimate Token for Nonstop Parties, Exclusive Access, and
            Unforgettable Vibes.
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 xl:items-center xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-3">
            <div
              className=" rounded-[20px]  overflow-hidden "
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1741893953/Gemini_Generated_Image_7vayaj7vayaj7vay_ivr25h.jpg"
                alt="party monster "
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className=" xl:col-span-3 xl:space-y-[20px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px] xl:space-y-[32px] md:space-y-[32px]">
                <Header4>Innovating Event Ticketing & Web3 Experiences</Header4>
                <Paragraph1>
                  Party Monster is redefining how people access events,
                  experiences, and digital entertainment through NFT-based
                  ticketing. We're building a seamless, blockchain-powered
                  system that eliminates scalping, fraud, and barriers to entry.
                </Paragraph1>
                <Paragraph1>
                  $PAMON holders gain exclusive access to NFT event tickets,
                  rewards, and VIP perks—whether it’s underground music events,
                  large-scale festivals, or cutting-edge virtual experiences.
                </Paragraph1>
                <Paragraph1>
                  But Party Monster is more than just events. We’re creating a
                  decentralized ecosystem where artists, venues, and creators
                  can launch their own NFT tickets, manage access, and connect
                  directly with their audiences.
                </Paragraph1>
                <Paragraph1>
                  This is the future of event access—fair, secure, and powered
                  by Web3. With Party Monster, you're not just attending events,
                  you're part of the revolution.
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
