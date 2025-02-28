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
            "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740685463/Gemini_Generated_Image_aybi4zaybi4zaybi_hgwzus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
        <div className=" container1 flex flex-col justify-center gap-2 items-center ">
          {" "}
          <div className=" text-center " data-aos="zoom-in-up">
            <Header1 className="text-white mt-4 xl:mt-0">
              Celebrating <span className="text-primary">Loyalty</span>,
              Strengthening <span className="text-primary">Connections,</span>{" "}
              Sending the Vibes, and Keep the Fun
              <span className="text-primary"> Rolling.</span>
            </Header1>
            <Paragraph3 className="mt-[16px] mb-[30px] text-white">
              A Social Token for Loyalty, Camaraderie, Fun and legendary moments
              with friends.
            </Paragraph3>
            <div className="  flex justify-center mb-[50px] items-center">
              <div className="flex w-full justify-center xl:flex-row flex-col items-center mt-4 gap-[24px] xl:gap-[32px]">
                <Button
                  text="Pre-Sale"
                  onClick={() => handleNavigation("presale")}
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
                <Header3>900 M</Header3>{" "}
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
