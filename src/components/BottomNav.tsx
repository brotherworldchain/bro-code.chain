"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  Gift,
  Info,
  PieChart,
  MapPin,
  MoreHorizontal,
} from "lucide-react";
import { ParagraphLink1 } from "./Text";

const sections = [
  { id: "home", name: "Home", icon: Home },
  { id: "airdrop", name: "Airdrop", icon: Gift },
  { id: "about", name: "About", icon: Info },
  { id: "tokenomics", name: "Tokenomics", icon: PieChart },
];

const moreSections = [
  { id: "roadmap", name: "Roadmap" },
  { id: "hot-venues", name: "Hot Venues (Coming Soon)" },
  { id: "nft-marketplace", name: "NFT Marketplace (Coming Soon)" },
  { id: "creators-space", name: "Creators Space (Coming Soon)" },
  { id: "vip-memberships", name: "VIP Memberships (Coming Soon)" },
  { id: "metaverse-raves", name: "Metaverse Raves (Coming Soon)" },
  { id: "on-chain-voting", name: "On-Chain Voting (Coming Soon)" },
  { id: "gamified-rewards", name: "Gamified Rewards (Coming Soon)" },
  { id: "brand-collaborations", name: "Brand Collaborations (Coming Soon)" },
  { id: "live-streaming", name: "Live Streaming Integration (Coming Soon)" },
  { id: "merch-store", name: "Merch Store (Coming Soon)" },
  { id: "ar-experiences", name: "Augmented Reality Experiences (Coming Soon)" },
];


const BottomNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [showMore, setShowMore] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
      });
      setActiveSection(id);

      const params = new URLSearchParams(searchParams.toString());
      params.set("section", id);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection;
      const viewportHeight = window.innerHeight;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionMiddle = rect.top + rect.height / 2;
          const sectionBottom = rect.bottom;

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
    if (sectionFromUrl && sections.some(({ id }) => id === sectionFromUrl)) {
      scrollToSection(sectionFromUrl);
    }
  }, []);

  if (pathname.includes("/admin")) {
    return null;
  }

  return (
    <>
      {showMore && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondary text-white flex flex-col items-center p-3 shadow-lg z-50">
          {/* Close button */}
          <button
            onClick={() => setShowMore(false)}
            className="absolute top-2 right-4 text-white text-lg"
          >
            ✕
          </button>

          {/* Scrollable content */}
          <div className="w-full max-h-[80vh] scrollbar-hide overflow-y-auto mt-8">
            {moreSections.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setShowMore(false);
                }}
                className="text-sm text-gray-400 hover:text-white p-2 w-full text-center"
              >
                <ParagraphLink1>{name}</ParagraphLink1>
              </button>
            ))}
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 lg:hidden left-0 w-full bg-secondary rounded-full   gray-900 text-white flex justify-around items-center p-3 shadow-lg">
        {sections.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex flex-col items-center space-y-1 text-sm ${
              activeSection === id ? "text-primary" : "text-gray-400"
            }`}
          >
            <Icon
              className={`w-6 h-6 ${
                activeSection === id ? "opacity-100" : "opacity-50"
              }`}
            />
            <ParagraphLink1>{name}</ParagraphLink1>
          </button>
        ))}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex flex-col items-center space-y-1 text-sm text-gray-400"
        >
          <MoreHorizontal className="w-6 h-6" />
          <ParagraphLink1>More</ParagraphLink1>
        </button>
      </nav>
    </>
  );
};

export default BottomNav;
