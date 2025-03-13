import { Header3, Header4, Paragraph1 } from "@/components/Text";

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className=" py-[50px] relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1741899855/Gemini_Generated_Image_6684d46684d46684_1_d7dlmw.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>{" "}
      <div className=" relative">
        <div className=" container1 text-white py-16- px-8 flex flex-col justify-center items-center">
          <div className=" w-full =max-w-[1000px]  text-center flex flex-col gap-4 justify-center items-center">
            <Header3 className="text-4xl font-bold mb-6">
              $PAMON <span className="text-l_yellow blue-400">Tokenomics</span>
            </Header3>
            <div className="  flex w-full max-w-[500px] justify-between items-center gap-4 border pt-3 bg-opacity-40 rounded-lg bg-secondary  px-4">
              <Paragraph1 className="text-lg mb-4">Total Supply: </Paragraph1>
              <Paragraph1 className="text-lg mb-4">
                {" "}
                900,000,000 $PAMON
              </Paragraph1>
            </div>

            <div className="grid- flex w-full mt-4 justify-center  items-center gap-4">
              <Header4>Token Distribution</Header4>
            </div>
            <div className="grid w-full grid-cols-1 sm:grid-cols-7  items-center gap-4">
              <div className="sm:col-span-3 flex flex-col items-start  gap-4 w-full">
                <div className="flex flex-col items-start border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Community Rewards{" "}
                    <span className="text-l_green">35% (315,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-start border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Liquidity Pool{" "}
                    <span className="text-l_green">30% (270,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-start border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Team Allocation{" "}
                    <span className="text-l_green">10% (90,000,000)</span>
                  </Paragraph1>
                </div>
              </div>
              <div className="mt-8 flex w-full justify-center border rounded-full">
                <img
                  src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1741901619/Gemini_Generated_Image_wucs5dwucs5dwucs_guhynb.jpg"
                  alt="$GOOD Coin"
                  className=" object-cover rounded-full"
                />
              </div>
              <div className=" sm:col-span-3 flex flex-col items-end border-b gap-4 w-full">
                <div className="flex flex-col items-end border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Marketing Fund{" "}
                    <span className="text-l_green">10% (90,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-end border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Charity Wallet{" "}
                    <span className="text-l_green">10% (90,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-end border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Reserve Fund{" "}
                    <span className="text-l_green">5% (45,000,000)</span>
                  </Paragraph1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-[100px]">
            <div className="flex flex-col md:flex-row bg-gray-900 bg-opacity-50 text-white rounded-lg shadow-lg p-4 md:p-8">
              {/* NFT Ticketing & Events */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-full p-2 mr-2">🎟️</div>
                  <h3 className="text-lg font-semibold">
                    NFT Ticketing & Global Events
                  </h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>Exclusive NFT-based tickets for $PAMON holders.</li>
                  <li>
                    Access to global parties, festivals, and private events.
                  </li>
                  <li>Seamless, blockchain-powered ticket verification.</li>
                  <li>
                    Future expansion for artists and organizers to create NFT
                    tickets.
                  </li>
                </ul>
              </div>

              {/* Holder Rewards & Dividends */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full p-2 mr-2">💰</div>
                  <h3 className="text-lg font-semibold">
                    Holder Rewards & Dividends
                  </h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>Holders earn SOL dividends based on $PAMON holdings.</li>
                  <li>Passive income through event revenue & ticket sales.</li>
                  <li>
                    VIP perks, exclusive drops, and priority event access.
                  </li>
                  <li>More rewards as the ecosystem grows.</li>
                </ul>
              </div>

              {/* Community & Engagement */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 rounded-full p-2 mr-2">🔥</div>
                  <h3 className="text-lg font-semibold">
                    Community & Engagement
                  </h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>Airdrops, giveaways, and viral challenges.</li>
                  <li>Community voting on future events and partnerships.</li>
                  <li>Exclusive merch, meetups, and online experiences.</li>
                  <li>Powered by the biggest party community on Solana.</li>
                </ul>
              </div>

              {/* Marketplace & Partnerships */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-600 rounded-full p-2 mr-2">🌎</div>
                  <h3 className="text-lg font-semibold">
                    Marketplace & Partnerships
                  </h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>
                    NFT marketplace for tickets, collectibles, and experiences.
                  </li>
                  <li>
                    Collaborations with clubs, festivals, and event organizers.
                  </li>
                  <li>Brand sponsorships and cross-chain partnerships.</li>
                  <li>Future integration with metaverse events.</li>
                </ul>
              </div>

              {/* Future Expansion & Innovation */}
              <div className="flex-1 p-4">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-600 rounded-full p-2 mr-2">🚀</div>
                  <h3 className="text-lg font-semibold">
                    Future Expansion & Innovation
                  </h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>Expanding to more cities and bigger festivals.</li>
                  <li>Metaverse event ticketing & virtual club experiences.</li>
                  <li>DeFi integration for staking & yield farming.</li>
                  <li>More utility, more experiences, and more parties!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
