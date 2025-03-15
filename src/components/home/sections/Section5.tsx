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
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
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
                  src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1742073211/hj_j4thty.jpg"
                  alt="Party monster"
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
            <div className="flex flex-col md:flex-row bg-gray-900 bg-opacity-60 text-white rounded-lg shadow-lg p-4 md:p-8">
              {/* NFT Ticketing & Events */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>
                  </div>
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
                  <div className="bg-yellow-500 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
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
                  <div className="bg-red-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>
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
                  <div className="bg-indigo-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
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
                  <div className="bg-pink-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
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
