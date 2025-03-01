import { Header3, Header4, Paragraph1 } from "@/components/Text";

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className=" py-[50px] relative text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfwdzot6l/image/upload/v1740697927/fdhgjkl_ohpiwb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>{" "}
      <div className=" relative">
        <div className=" container1 text-white py-16- px-8 flex flex-col justify-center items-center">
          <div className=" w-full =max-w-[1000px]  text-center flex flex-col gap-4 justify-center items-center">
            <Header3 className="text-4xl font-bold mb-6">
              $BRO-CODE{" "}
              <span className="text-l_yellow blue-400">Tokenomics</span>
            </Header3>
            <div className="  flex w-full max-w-[500px] justify-between items-center gap-4 border pt-3 bg-opacity-40 rounded-lg bg-secondary  px-4">
              <Paragraph1 className="text-lg mb-4">Total Supply: </Paragraph1>
              <Paragraph1 className="text-lg mb-4">
                {" "}
                900,000,000 $BRO-CODE
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
                    <span className="text-l_green">30% (270,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-start border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Liquidity Pool{" "}
                    <span className="text-l_green">25% (225,000,000)</span>
                  </Paragraph1>
                </div>
                <div className="flex flex-col items-start border-b gap-4 w-full">
                  <Paragraph1 className="text-lg  border-gray-700 pb-2 mb-2">
                    Team Allocation{" "}
                    <span className="text-l_green">20% (180,000,000)</span>
                  </Paragraph1>
                </div>
              </div>
              <div className="mt-8 flex w-full justify-center border rounded-full">
                <img
                  src="https://res.cloudinary.com/dfwdzot6l/image/upload/v1740697959/Gemini_Generated_Image_klp71sklp71sklp7logo_eg3j2g.jpg"
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
            <div className="flex flex-col md:flex-row bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg p-4 md:p-8">
              {/* Reward Mechanisms */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Pre-Sale </h3>
                </div>
                <ul className="list-disc list-inside">
                  {/* <li>Initial token distribution</li> */}
                  <li>Supports early adopters with discounted $BRO-CODE.</li>
                  <li>Funds initial liquidity and project development.</li>
                  <li>
                    Split into private and public sale phases for fair access.
                  </li>
                  <li>Ensures strong community involvement</li>
                </ul>
              </div>

              {/* Burn Mechanism */}
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
                  <h3 className="text-lg font-semibold">Community & Rewards</h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>
                    Airdrops, giveaways, and social engagement incentives.
                  </li>
                  <li>
                    Encourages viral challenges and peer-to-peer transfers.
                  </li>
                  <li>Rewards active participants and loyal holders.</li>
                  <li>Strengthens long-term adoption</li>
                </ul>
              </div>

              {/* Transaction Fees */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.055 3.12 1.637A9 9 0 109.62 8.363C8.08 9.945 7 12.107 7 14.268 7 17.01 9.23 19 12 19c2.77 0 5-1.99 5-4.732C17 11.893 15.664 10 14 10c-.814 0-1.644.196-2.298.546A3.313 3.313 0 0112 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">
                    Liquidity & Exchange Listings
                  </h3>
                </div>

                <ul className="list-disc list-inside">
                  <li>
                    Ensures smooth trading on decentralized and centralized
                    exchanges.
                  </li>
                  <li>Reduces volatility and enhances market stability.</li>
                  <li>Provides liquidity for seamless transactions.</li>
                  <li>Supports future exchange partnerships and listings.</li>
                </ul>
              </div>

              {/* Vesting Schedule */}
              <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Fair & Fun Economy</h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>$BRO-CODE is designed to be accessible and engaging.</li>
                  <li>
                    No complex mechanics—just a simple way to send and receive
                    tokens.
                  </li>
                  <li>
                    Encourages organic adoption through community-driven use.
                  </li>
                  <li>
                    A social token built for fun, recognition, and camaraderie.
                  </li>
                </ul>
              </div>

              {/* Use Cases */}
              <div className="flex-1 p-4">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-600 rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 13.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Use Cases</h3>
                </div>
                <ul className="list-disc list-inside">
                  <li>Community engagement & voting</li>
                  <li>NFT purchases & marketplace</li>

                  <li>Tipping, rewarding, and recognizing friends.</li>
                  <li>Charity donations</li>
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
