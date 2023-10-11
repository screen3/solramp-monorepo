import localFont from "next/font/local";

export const SatoshiFont = localFont({
  src: [
    {
      path: "./Satoshi/Satoshi-Black.otf",
      weight: "900",
    },
    {
      path: "./Satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "./Satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "./Satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-satoshi",
});

