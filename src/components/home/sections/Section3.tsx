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
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740697927/fdhgjkl_ohpiwb.jpg')",
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
          <Paragraph1 className=" max-w-[883px] text-center ">
            The Ultimate Symbol of Loyalty, Camaraderie, and Brotherhood
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 xl:items-center xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-3">
            <div
              className=" rounded-full  overflow-hidden "
              data-aos="fade-left"
            >
              <img
                src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740697959/Gemini_Generated_Image_klp71sklp71sklp7logo_eg3j2g.jpg"
                alt="BRO-CODE Token"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className=" xl:col-span-3 xl:space-y-[30px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px] xl:space-y-[32px] md:space-y-[32px]">
                <Header4>Building a Stronger Community</Header4>
                <Paragraph1>
                  BRO-CODE is more than just a token—it's a movement. It
                  represents the spirit of brotherhood, loyalty, and mutual
                  support. Whether you're sharing wins, supporting friends, or
                  simply vibing together, BRO-CODE is the glue that keeps the
                  community strong.
                </Paragraph1>
                <Paragraph1>
                  By holding BRO-CODE, you're not just investing in a digital
                  asset, you're becoming part of a family that values
                  connection, trust, and shared experiences.
                </Paragraph1>
                <Paragraph1>
                  Our mission is to empower individuals through the BRO-CODE
                  token, providing a platform for meaningful connections and a
                  strong support system. We believe in
                  creating value beyond transactions, ensuring that every member
                  of our community feels seen, heard, and appreciated.
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
