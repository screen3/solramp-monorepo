import { Coin, Convert, Messages, Wallet } from "iconsax-react";
import Image from "next/image";
import React from "react";

export default function YouInMind() {
    return (
        <section className="py-20" id="features">
            <div className="">
                <div className="mb-9 text-center max-w-md mx-auto text-[#1A202B]">
                    <h2 className=" text-4xl h2 mb-4 font-semibold">
                        Keeping you in mind
                    </h2>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full lg:w-1/2 container">
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F8F3FD]">
                                <Wallet
                                    variant="Linear"
                                    className="text-[#A15DDF]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#101828] font-medium ">
                                    Multiple payment options
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Choose your way to pay; Bank Transfer,
                                    Transferwise or wallet payment through slop
                                    wallet or Phantom Wallet.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F8F3FD]">
                                <Coin
                                    variant="Outline"
                                    className="text-[#A15DDF]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#101828] font-medium ">
                                    Low Transaction Fees
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Enjoy transparent pricing as low as 0.5% fee
                                    on every transaction capped at just $10.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F8F3FD]">
                                <Messages
                                    variant="Outline"
                                    className="text-[#A15DDF]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#101828] font-medium ">
                                    Real-Time Messaging
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Stay connected while communication between
                                    buyers and sellers in Real-time
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg flex items-start justify-start gap-4 flex-col max-w-full py-4 px-2 text-center mx-auto">
                            <div className="w-12 h-12 relative rounded-full p-3 bg-[#F8F3FD]">
                                <Convert
                                    variant="Outline"
                                    className="text-[#A15DDF]"
                                />
                            </div>
                            <div className="text-left space-y-2">
                                <h6 className="text-xl text-[#101828] font-medium ">
                                    Instant Conversion and Payouts
                                </h6>
                                <p className="text-base text-[#667085]">
                                    Convert USDC and USDT to Fiat instantly at
                                    current market rates fast and secured.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="  w-full lg:w-1/2 max-w-full flex items-center justify-end ">
                        <div className="w-[550px] h-[550px] relative  bg-gray-300 rounded-l-lg">
                            <Image
                                src="/images/MacbookPro16.png"
                                alt=""
                                fill
                                className={"object-contain w-full h-full"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
