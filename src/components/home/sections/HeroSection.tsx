"use client";

import Button from "@/components/Button";
import { Header1, Header3, Paragraph2, Paragraph3 } from "@/components/Text";
import React from "react";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  const handleNavigation = (section: string) => {
    // Scroll to section
    const target = document.getElementById(section);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed navbar
        // behavior: "smooth", // Uncomment for smooth scrolling
      });
    }
  };

  return (
    <div id="home" className="  ">
      <div
        className=" pt-[100px] sm:pt-[140px] relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1741893399/gshdshjdd_iptnhu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        <div className=" container1 flex flex-col justify-center gap-2 items-center ">
          {" "}
          <div className=" text-center " data-aos="zoom-in-up">
            {" "}
            <Header1 className="text-white mt-4 xl:mt-0">
              The{" "}
              <span className="bg-gradient-to-r from-primary to-l_green bg-clip-text text-transparent">
                {" "}
                Biggest
              </span>{" "}
              Party on the Solana Network! Revolutionizing
              <span className="bg-gradient-to-r from-primary to-l_green bg-clip-text text-transparent">
                {" "}
                NFT Ticketing{" "}
              </span>{" "}
              and event planning World wide.
            </Header1>
            <Paragraph3 className="mt-[16px] mb-[30px] text-white">
              $PAMON is more than a token—it's your all-access pass to the
              future of events. Own, trade, and experience the world’s best
              NFT-powered parties.
            </Paragraph3>
            <div className="  flex justify-center mb-[50px] items-center">
              <div className="flex w-full justify-center xl:flex-row flex-col items-center mt-4 gap-[24px] xl:gap-[32px]">
                <Button
                  text="Start Earning"
                  onClick={() => handleNavigation("airdrop")}
                  additionalClasses="border-primary xl:w-fit w-full "
                />
                <Button
                  text="Learn More"
                  onClick={() => handleNavigation("about")}
                  color="text-white"
                  backgroundColor=" bg-p_black"
                  border="border-2 border-white "
                  additionalClasses=" xl:w-fit w-full "
                />
              </div>
            </div>
            <div className=" text-white flex gap-4 sm:gap-[100px] items-center justify-center">
              <div>
                <Header3>900 M</Header3>
                <Paragraph2>Total Supply</Paragraph2>
              </div>
              <div>
                <Header3>Solana</Header3> <Paragraph2>Blockchian</Paragraph2>
              </div>
              <div>
                <Header3>30%</Header3> <Paragraph2>Community Reward</Paragraph2>
              </div>
            </div>
          </div>
          <div> </div>
        </div>
        <div className="mt-[70px] ">
          <ElevatingBrands />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
