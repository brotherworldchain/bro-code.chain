"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import HeroSection from "./sections/HeroSection";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

const Overview: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<string>(
    searchParams.get("section") || "home"
  );

  useEffect(() => {
    const sections: { id: string }[] = [
      { id: "home" },
      { id: "airdrop" },
      { id: "about" },
      { id: "presale" },
      { id: "tokenomics" },
      { id: "roadmap" },
      { id: "contact" },
    ];

    const handleScroll = () => {
      let currentSection = activeSection;
      const middleOfScreen = window.innerHeight / 2;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;

          // Check if section middle is closest to the viewport center
          if (sectionMiddle > 0 && sectionMiddle < middleOfScreen * 1.5) {
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

  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="airdrop">
        <Section2 />
      </div>
      <div id="about">
        <Section3 />
      </div>
      <div id="presale">
        {/* <Section4 /> */}
      </div>
      <div id="tokenomics">
        <Section5 />
      </div>
      <div id="roadmap">
        <Section6 />
      </div>
    </div>
  );
};

export default Overview;
