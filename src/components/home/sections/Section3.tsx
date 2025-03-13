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
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
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
                <Header4>Revolutionizing Event Ticketing with NFTs</Header4>
                <Paragraph1>
                  Party Monster isn’t just a token—it’s the future of event
                  access. We’re building a next-generation NFT ticketing
                  system that will power exclusive parties, global events,
                  and unforgettable experiences.
                </Paragraph1>
                <Paragraph1>
                  $PAMON holders will get access to NFT-based tickets for
                  events worldwide, from underground raves to massive festivals.
                  No scalping, no fakes—just seamless, blockchain-powered entry.
                </Paragraph1>
                <Paragraph1>
                  Our vision goes beyond our own events. As we grow, we’ll
                  empower artists, clubs, and event organizers to create and
                  manage their own NFT tickets on our platform, making ticketing
                  more fair, secure, and decentralized than ever before.
                </Paragraph1>
                <Paragraph1>
                  With Party Monster, you’re not just buying a ticket—you’re
                  unlocking a new era of nightlife, community, and limitless
                  experiences.
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
