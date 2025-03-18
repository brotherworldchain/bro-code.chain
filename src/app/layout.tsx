
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { Suspense } from "react";
import { WalletContextProvider } from "../context/WalletContext";
import "@solana/wallet-adapter-react-ui/styles.css";
import BottomNav from "@/components/BottomNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Party Monster - NFT Event Ticketing & Web3 Innovation",
  description:
    "Revolutionizing event access with NFT-powered ticketing. Party Monster brings secure, tradeable, and exclusive experiences to the Web3 space.",
  generator:
    "Party Monster, NFT ticketing, blockchain events, Web3 innovation, digital tickets, exclusive access, decentralized ticketing, party, events, Solana, crypto, NFT events, tokenized access, festival tickets, nightlife, concerts, ticket marketplace",
  keywords: [
    "NFT ticketing",
    "Web3 events",
    "blockchain",
    "decentralized ticketing",
    "crypto",
    "Solana",
    "tokenized tickets",
    "exclusive access",
    "event tech",
    "digital passes",
    "party NFT",
    "concerts",
    "music festivals",
    "nightlife",
    "event innovation",
    "VIP access",
    "smart contracts",
    "party monster",
    "crypto payments",
    "secure ticketing",
    "secondary marketplace",
    "ticket resale",
    "decentralized apps",
    "live entertainment",
    "club events",
    "Web3 experiences",
    "digital collectables",
    "community-driven events",
    "immersive experiences",
    "NFT rewards",
    "blockchain adoption",
  ],

  applicationName: "Party Monster NFT Ticketing",
  openGraph: {
    title: "Party Monster - NFT Event Ticketing & Web3 Innovation",
    description:
      "Experience the future of event access with Party Monster. NFT-powered ticketing for exclusive, secure, and tradeable entry to top events.",
    url: "https://www.partymonsternft.com",
    siteName: "Party Monster",
    images: [
      {
        url: "https://yourimageurl.com/party-monster-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Party Monster - NFT Ticketing & Web3 Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@partymonsternft",
    title: "Party Monster - NFT Event Ticketing & Web3 Innovation",
    description:
      "Revolutionizing event ticketing with NFT-based access. Secure, tradeable, and decentralized tickets for the best parties and events worldwide.",
    images: "https://yourimageurl.com/party-monster-banner.jpg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary overflow-hidden">
        {" "}
        <Suspense fallback={<div>Loading...</div>}>
          <WalletContextProvider>
            <Navbar />
            {children}
            <Footer />
            <BottomNav />
          </WalletContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
