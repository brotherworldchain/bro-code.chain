"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
import { ParagraphLink1 } from "./Text";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    searchParams.get("section") || "home"
  );

  const sections = [
    "home",
    "airdrop",
    "about",
    "tokenomics",
  ];

 const moresections = [
   "roadmap",
   "Hot-Venues (Coming Soon)",
   "NFT Marketplace (Coming Soon)",
   "Creators Space (Coming Soon)",
   "VIP Memberships (Coming Soon)", // Exclusive perks for $PAMON holders
   "Metaverse Raves (Coming Soon)", // Virtual parties & interactive experiences
   "On-Chain Voting (Coming Soon)", // Community decides event locations & artists
   "Gamified Rewards (Coming Soon)", // Earn badges, rewards, and exclusive drops
   "Brand Collaborations (Coming Soon)", // Exclusive brand deals & sponsored events
   "Live Streaming Integration (Coming Soon)", // Web3-powered event streaming
   "Merch Store (Coming Soon)", // Party Monster apparel & NFT-linked merch
   "Augmented Reality Experiences (Coming Soon)", // AR-powered event interactions
 ];




  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const { connected } = useWallet();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for fixed navbar
        // behavior: "smooth",
      });
      setActiveSection(id);

      // Update URL without reloading
      const params = new URLSearchParams(searchParams.toString());
      params.set("section", id);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });

      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection;
      const viewportHeight = window.innerHeight;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionMiddle = rect.top + rect.height / 2;
          const sectionBottom = rect.bottom;

          // Detect if section is in view based on both top and middle
          if (
            (sectionTop >= 0 && sectionTop <= viewportHeight / 3) ||
            (sectionMiddle >= 0 && sectionMiddle <= (viewportHeight * 2) / 3) ||
            (sectionBottom >= 0 && sectionBottom <= viewportHeight)
          ) {
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        const params = new URLSearchParams(searchParams.toString());
        params.set("section", currentSection);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, router, pathname, searchParams]);

  useEffect(() => {
    const sectionFromUrl = searchParams.get("section");
    if (sectionFromUrl && sections.includes(sectionFromUrl)) {
      scrollToSection(sectionFromUrl);
    }
  }, []);

  if (pathname.includes("/admin")) {
    return null;
  }

  return (
    <div className="bg-bg_blue sm:bg-opacity-50 sm:py-[8px] fixed flex w-full z-20">
      <div className="w-full">
        <div className="container1 flex justify-between w-full items-center">
          <div className="flex items-center ">
            <img
              src="/images/logo.png"
              alt=""
              className="h-[70px] rounded-full"
            />
          </div>
          <div className="bg-secondary [#022e2c] px-[48px] py-[8px] rounded-full bg-opacity-50- text-white gap-[48px] items-center hidden lg:flex">
            {sections.map((id) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                <ParagraphLink1
                  className={activeSection === id ? "text-primary" : ""}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </ParagraphLink1>
              </button>
            ))}
            <button
              onClick={toggleMenu}
              className="focus:outline-none lg:block hidden text-white"
            >
              {/* <img
                src={
                  menuOpen
                    ? "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/close_cjqy1g.png"
                    : "https://res.cloudinary.com/dipwsq5cg/image/upload/v1739309674/menu_fmwnnr.png"
                }
                alt="menu"
                className=" xl:w-[24px] w-[21px] xl:h-[24px] "
              /> */}
              <ParagraphLink1>More</ParagraphLink1>
            </button>
          </div>

          {/* <Button
            text="Connect wallet"
            href="/contact-us"
            isLink={true}
            additionalClasses="border-0 min-w-[152px] hidden lg:block"
          /> */}
          <div className=" flex items-center gap-4">
            <WalletMultiButton>
              {connected ? undefined : "Connect Wallet"}
            </WalletMultiButton>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="p-[24px] bg-secondary flex  text-white flex-col justify-center items-center">
            <div className="container1   flex flex-col w-full space-y-[24px] justify-between items-center">
              <div
                onClick={toggleMenu}
                className="focus:outline-none lg:block hidden text-white xl:flex w-full justify-end"
              >
                <ParagraphLink1>X</ParagraphLink1>
              </div>
              <div className="w-full max-h-[80vh] flex  flex-col gap-2 items-center justify-center scrollbar-hide overflow-y-auto mt-8">
                {moresections.map((id) => (
                  <button key={id} onClick={() => scrollToSection(id)}>
                    <ParagraphLink1
                      className={activeSection === id ? "text-primary" : ""}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </ParagraphLink1>
                  </button>
                ))}
                <WalletMultiButton>
                  {connected ? undefined : "Connect Wallet"}
                </WalletMultiButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
