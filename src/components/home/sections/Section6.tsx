import { Header3, Header4, Header5 } from "@/components/Text";
import React from "react";
import BackgroundMusic from "./others/BackgroundMusic4";

const TokenRoadmap = () => {
  return (
    <div
      id="roadmap"
      className=" py-[50px] pb-[200px] relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1741900916/Gemini_Generated_Image_tctpn1tctpn1tctp_1_rrlyf4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="relative container1 bg-gray-900- text-white p-8 rounded-lg shadow-lg">
        <Header3 className="text-3xl font-bold text-center mb-8">
          $PAMON Roadmap
        </Header3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r w-full max-w-[800px] bg-opacity-50 from-purple-700 to-pink-500 border p-6 rounded-lg"
          >
            <Header5 className="mb-4">Phase 1: The Awakening</Header5>
            <p className="mb-4">
              The birth of Party Monster. Establishing the brand, building the
              hype, and setting the stage for the biggest decentralized party in
              Web3.
            </p>
            <ul className="list-disc list-inside">
              <li>Website & Socials Launch</li>
              <li>Community Building & Engagement</li>
              <li>Giveaways & Airdrops</li>
              <li>Launch $PAMON Token</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r w-full max-w-[800px] opacity-80 from-pink-500 to-orange-500 border p-6 rounded-lg"
          >
            <Header5 className="mb-4">Phase 2: Party Monster Rises</Header5>
            <p className="mb-4">
              Building the ultimate party ecosystem with viral engagement,
              collaborations, and exclusive NFTs.
            </p>
            <ul className="list-disc list-inside">
              <li>Viral Challenges & Social Contests</li>
              <li>Strategic Partnerships</li>
              <li>Exclusive Party Pass NFTs</li>
              <li>Community Voting & Governance</li>
            </ul>
          </div>
          <BackgroundMusic />

          {/* Phase 3 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r w-full max-w-[800px] opacity-80 from-orange-500 to-yellow-500 border p-6 rounded-lg"
          >
            <Header5 className="mb-4">Phase 3: Utility Expansion</Header5>
            <p className="mb-4">
              Time to unlock $PAMON’s real power with rewards, event access, and
              real-world utility.
            </p>
            <ul className="list-disc list-inside">
              <li>Exclusive NFT-Based Tickets</li>
              <li>Reward System for Holders</li>
              <li>Partnerships with Clubs & Festivals</li>
              <li>First Exchange Listings</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Phase 4 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r w-full max-w-[800px] opacity-80 from-yellow-500 to-green-500 border p-6 rounded-lg"
          >
            <Header5 className="mb-4">Phase 4: Global Party Takeover</Header5>
            <p className="mb-4">
              Taking $PAMON to the world. Expanding to major events, celebrity
              collaborations, and international recognition.
            </p>
            <ul className="list-disc list-inside">
              <li>Major Influencer Collaborations</li>
              <li>International Festivals & Events</li>
              <li>Expanded Exchange Listings</li>
              <li>Official Party Monster Merch</li>
            </ul>
          </div>

          {/* Phase 5 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r w-full max-w-[800px] opacity-80 from-green-500 to-blue-500 border p-6 rounded-lg"
          >
            <Header5 className="mb-4">Phase 5: The Ultimate Partyverse</Header5>
            <p className="mb-4">
              Future-proofing $PAMON with continuous growth, metaverse
              expansion, and long-term rewards.
            </p>
            <ul className="list-disc list-inside">
              <li>Metaverse Event Integration</li>
              <li>Decentralized Treasury & DAO Governance</li>
              <li>Exclusive VIP Party Access</li>
              <li>More Surprises for the $PAMON Family</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenRoadmap;
