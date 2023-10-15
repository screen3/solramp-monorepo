import Image from "next/image";
import Link from "next/link";
import React from "react";
import YouInMind from "./components/HomePageComponents/YouInMind";
import Integrations from "./components/HomePageComponents/Integrations";
import CTA from "./components/HomePageComponents/CTA";
import Pricing from "./components/HomePageComponents/Pricing";
import Navbar from "./components/HomePageLayout/Navbar";
import Footer from "./components/HomePageLayout/Footer";
import { Bank, Scan } from "iconsax-react";
import LandingHeroForm from "./components/Forms/LandingHeroForm";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Script src="popup.js" strategy="beforeInteractive" />

            <Navbar />

            <main>
                <div className="bg-[#FCF9FF] py-20 hero relative">
                    <div className="container mx-auto max-w-7xl z-20">
                        <div className="flex flex-col items-center justify-center gap-x-5 gap-y-12 ">
                            <div className="text-center container max-w-3xl mx-auto">
                                <div>
                                    <h1 className="text-5xl font-extrabold text-[#351F0F]">
                                        Checkout with Solramp
                                    </h1>
                                </div>
                                <div className="mt-5  ">
                                    <p className="text-base text-[#3F3F3F]">
                                        Accept{" "}
                                        <span className="underline">
                                            crypto
                                        </span>{" "}
                                        payments from{" "}
                                        <span className="underline">
                                            non-crypto
                                        </span>{" "}
                                        users for your{" "}
                                        <span className="underline">
                                            business with ease.
                                        </span>
                                        <br />
                                        Availabe for ReactJs, VueJs, Wordpress
                                        and Shopify websites.
                                        {/* Use our Solramp SDK on your website,
                                        available for Vuejs and Reactjs, on your
                                        WordPress site, and on your Shopify
                                        store. */}
                                    </p>
                                </div>
                            </div>
                            <div className=" w-full max-w-3xl mx-auto z-20 bg-white">
                                <div className="pricing_box py-4 px-3 text-[#474545] rounded-lg border border-[#EFEFEF] z-20">
                                    <div className="py-2 px-4 w-full z-20">
                                        <LandingHeroForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full block absolute top-0 left-0 pointer-events-none">
                        <Image
                            src={"/images/MinimalPattern.svg"}
                            fill
                            className="w-full h-full object-cover"
                            alt="pattern"
                        />
                    </div>
                </div>

                <YouInMind />
                <Pricing />
                <Integrations />
                <CTA />
            </main>

            <Footer />
        </>
    );
}
