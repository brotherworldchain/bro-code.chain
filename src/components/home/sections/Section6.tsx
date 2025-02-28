import { Header3, Header4, Header5 } from "@/components/Text";
import React from "react";

const TokenRoadmap = () => {
  return (
    <div
      id="roadmap"
      className=" py-[50px] pb-[200px] relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740749104/Gemini_Generated_Image_27whwn27whwn27wh_xedqvq.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      <div className=" relative  container1 gray-800 text-white p-8 rounded-lg shadow-lg">
        <Header3 className="text-3xl font-bold text-center mb-8">
          $BRO-CODE Roadmap
        </Header3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-700- bg-gradient-to-r w-full max-w-[800px] opacity-70 from-secondary to-l_yellow border p-6 rounded-lg"
          >
            <Header5 data-aos="zoom-in-up" className=" mb-4">
              Phase 1: The BRO Awakens
            </Header5>
            <p className="mb-4">
              Laying the foundation for the BRO movement. Building hype,
              creating buzz, and setting the tone for the ultimate fun
              experience.
            </p>
            <ul className="list-disc list-inside">
              <li>Website & Socials Launch</li>
              <li>Community Building & Engagement</li>
              <li>Giveaways & Airdrops</li>
              <li>Launch $BRO-CODE Token</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-700- bg-gradient-to-r w-full max-w-[800px] opacity-70 from-secondary to-primary border p-6 rounded-lg"
          >
            <Header5 className=" mb-4">Phase 2: $BRO-CODE Initiation</Header5>
            <p className="mb-4">
              Getting the squad together. Strengthening the community with viral
              challenges, memes, and collaborations.
            </p>
            <ul className="list-disc list-inside">
              <li>Viral Challenges & Social Contests</li>
              <li>Strategic Partnerships</li>
              <li>Exclusive Bro NFTs</li>
              <li>Community Voting & Governance</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-700- bg-gradient-to-r w-full max-w-[800px] opacity-70 from-secondary to-[#9919d3] border p-6 rounded-lg"
          >
            <Header5 className=" mb-4">Phase 3: BRO Utility Unlock</Header5>
            <p className="mb-4">
              Time to put $BRO-CODE to work. Expanding the ways bros can earn,
              trade, and flex their BRO tokens.
            </p>
            <ul className="list-disc list-inside">
              <li>Merchant Partnerships</li>
              <li>Leaderboard & Rewards System</li>
              <li>Exclusive Bro Perks & Discounts</li>
              <li>First Exchange Listings</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Phase 4 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-700- bg-gradient-to-r w-full max-w-[800px] opacity-70 from-secondary to-[#2aaad9] border p-6 rounded-lg"
          >
            <Header5 className=" mb-4">Phase 4: Global BRO Takeover</Header5>
            <p className="mb-4">
              Going mainstream. Expanding $BRO-CODE’s reach with major
              influencers, events, and real-world adoption.
            </p>
            <ul className="list-disc list-inside">
              <li>Major Influencer Collaborations</li>
              <li>Bro Code IRL Events & Meetups</li>
              <li>Expanded Exchange Listings</li>
              <li>Bro Code Merch & Swag</li>
            </ul>
          </div>

          {/* Phase 5 */}
          <div
            data-aos="zoom-in-up"
            className="bg-gray-700- bg-gradient-to-r w-full max-w-[800px] opacity-70 from-secondary to-[#a3c780] border p-6 rounded-lg"
          >
            <Header5 className=" mb-4">Phase 5: The Brovolution</Header5>
            <p className="mb-4">
              Future-proofing $BRO-CODE for the long run with continuous
              innovation, community-driven updates, and new utilities.
            </p>
            <ul className="list-disc list-inside">
              <li>Decentralized Bro Treasury</li>
              <li>DAO Governance Enhancements</li>
              <li>Broverse (Metaverse Integration)</li>
              <li>More Surprises for the BRO Fam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenRoadmap;
