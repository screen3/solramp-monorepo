import { SatoshiFont } from "./fonts";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SolRamp: Accept crypto payment for non-crypto users on Solana",
    metadataBase: new URL("https://solramp.com"),
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
    openGraph: {
        title: "SolRamp: Accept crypto payment for non-crypto users on Solana",
        description:
            "Accept crypto payments from non-crypto users. Use our Solramp SDK on your website, available for Vuejs and Reactjs, on your WordPress site, and on your Shopify store.",

        url: "https://solramp.com",
        siteName: "Solramp",
        images: [
            {
                url: "https://www.solramp.com/images/MacbookPro16.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://www.solramp.com/images/MacbookPro16.png",
                width: 1800,
                height: 1600,
                alt: "Solramp Merchant Dashboard",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: [
            { url: "/images/favicon/favicon-16x16.png", size: "16x16" }, //https://www.solramp.com/images/MacbookPro16.png
            { url: "/images/favicon/favicon-32x32.png", size: "32x32" },
        ],
        shortcut: "/images/favicon/favicon-32x32.png",
        apple: "/images/favicon/apple-touch-icon.png",
        andriod: [
            {
                url: "/images/favicon/android-chrome-192x192.png",
                size: "192x192",
            },
            {
                url: "/images/favicon/android-chrome-512x512.png",
                size: "512x512",
            },
        ],
    },
};

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
