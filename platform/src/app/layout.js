import Navbar from "./components/HomePageLayout/Navbar";
import { SatoshiFont } from "./fonts";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SolRamp: Accept crypto payment for non-crypto users on Solana",
    description:
        "Accept crypto payments from non-crypto users. Use our Solramp SDK on your website, available for Vuejs and Reactjs, on your WordPress site, and on your Shopify store.",
    keyword: [
        "Solana",
        "Crypto to Fiat",
        "Fiat to Crypto",
        "Crypto Checkout",
        "Crypto Payment",
        "Solana Payment",
        "Solana Checkout",
        "Solana Payment Gateway",
        "Pay with USDC",
        "Pay with USDT",
        "Pay with SOL",
    ],
    icons: {
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/icon.svg",
        },
        icon: [
            // @ts-ignore
            { url: "/icon-16x16.png", size: "16x16" },
            { url: "/icon.svg", size: "32x32" },
        ],
        shortcut: "/icon.svg",
        apple: "/icon.svg",
        android: [
            {
                url: "/icon-192x192.svg",
                size: "192x192",
            },
            {
                url: "/icon-512x512.svg",
                size: "512x512",
            },
        ],
    },
  }

//     openGraph: {
//         title: "SolRamp: Accept crypto payment for non-crypto users on Solana",
//         description:
//             "Accept crypto payments from non-crypto users. Use our Solramp SDK on your website, available for Vuejs and Reactjs, on your WordPress site, and on your Shopify store.",
//         url: "https://solramp.com",
//         siteName: "SolRamp",
//         images: [
//             {
//                 url: "https://screen3.io/images/MacbookPro16.png",
//                 width: 800,
//                 height: 600,
//             },
//             {
//                 url: "https://screen3.io/images/MacbookPro16.png",
//                 width: 1800,
//                 height: 1600,
//                 alt: "Merchant Dashboard",
//             },
//         ],
//         locale: "en-US",
//         type: "website",
//     },
// };

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body
                    className={`${SatoshiFont.variable} ${SatoshiFont.className} `}
                    suppressHydrationWarning={true}
                >
                    {children}
                </body>
            </html>
        </>
    );
}
