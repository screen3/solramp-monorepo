"use client";

import { Bank, Scan } from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PublicKey } from "@solana/web3.js";

//8CGcqJuFxhnQ1HyYbbuCXYzgfGAVKv9DTtCUj5AURe2c
export default function LandingHeroForm() {
    const paymentPopup = useRef();
    const [invalidAddress, setInvalidAddress] = React.useState(null);
    const [amount, setAmount] = React.useState(10);
    const [email, setEmail] = React.useState("");
    const [currency, setCurrency] = React.useState("AED");
    const [crypto, setCrypto] = React.useState("USDC");
    const [address, setAddress] = React.useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            paymentPopup.current = window.popup.initialize({
                business: "0292399023",
            });
        }
    }, []);

    const openPaymentPopup = (event) => {
        event.preventDefault();

        try {
            const recipient = new PublicKey(address);
            const valid = PublicKey.isOnCurve(recipient.toBytes());

            if (valid) {
                paymentPopup.current.open({
                    amount: amount,
                    fiat: currency,
                    token: crypto,
                    customer_email: email,
                });
            }
        } catch (error) {
            setInvalidAddress(true);
        }
    };

    return (
        <>
            <form className="z-20" onSubmit={openPaymentPopup}>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <div className="w-full md:w-1/4">
                            <label
                                className="font-medium mb-3"
                                htmlFor="amount"
                            >
                                Amount
                            </label>
                            <input
                                id="amount"
                                required
                                max={100}
                                type="number"
                                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="amount"
                                autoComplete="off"
                                defaultValue={amount}
                                onChange={(event) => {
                                    setAmount(event.target.value);
                                }}
                                placeholder="e.g; 1000"
                            />
                        </div>

                        <div className="w-full md:w-3/4">
                            <label className="font-medium mb-3" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="email"
                                autoComplete="off"
                                placeholder="e.g example@mailinator.com"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="w-full md:w-1/2">
                            <label className=" font-medium mb-3" htmlFor="curr">
                                Currency
                            </label>
                            <select
                                id="curr"
                                defaultValue={currency}
                                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="curr"
                                onChange={(event) => {
                                    setCurrency(event.target.value);
                                }}
                            >
                                <option value={"AED"}>🇦🇪 AED</option>
                                <option value={"USD"}>🇺🇸 USD</option>
                                <option value={"NGN"}>🇳🇬 NGN</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2">
                            <label
                                className="font-medium mb-3"
                                htmlFor="crypto"
                            >
                                Crypto
                            </label>
                            <select
                                id="crypto"
                                defaultValue={crypto}
                                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                                name="crypto"
                            >
                                {/* <option value={1}>USDT</option> */}
                                <option value={"USDC"}>USDC (testnet)</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="w-full w-full">
                            <label
                                className=" font-medium mb-3"
                                htmlFor="address"
                            >
                                Enter recipients address
                            </label>
                            <input
                                id="address"
                                type="text"
                                className={`block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none" ${
                                    invalidAddress ? "border-red-500" : ""
                                }`}
                                name="address"
                                autoComplete="off"
                                onChange={(event) => {
                                    try {
                                        const recipient = new PublicKey(
                                            event.target.value
                                        );
                                        const valid = PublicKey.isOnCurve(
                                            recipient.toBytes()
                                        );

                                        setInvalidAddress(!valid);
                                    } catch (error) {
                                        setInvalidAddress(true);
                                    }

                                    setAddress(event.target.value);
                                }}
                                required
                                placeholder="e.g HN7cABqLq.....ELLLsHHe4YWrH"
                                // defaultValue="8CGcqJuFxhnQ1HyYbbuCXYzgfGAVKv9DTtCUj5AURe2c"
                            />
                            {invalidAddress && (
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    To avoid loss of funds, please provide a
                                    valid solana address.
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-wrap mt-4">
                    <div>
                        <h5 className="font-medium text-[#474545] text-sm mb-2">
                            We accept
                        </h5>
                        <div className="flex items-center justify-start text-[#959697] text-xs font-medium gap-3">
                            <div className="inline-flex items-center gap-1">
                                <Bank
                                    variant="Outline"
                                    size={15}
                                    className="text-[#A15DDF]"
                                />
                                Bank Transfer
                            </div>
                            <div className="inline-flex items-center gap-1">
                                <Image
                                    src={"/images/transferwise.svg"}
                                    width={12}
                                    height={12}
                                    alt="transferwise"
                                    className="w-auto h-auto"
                                />{" "}
                                Transferwise
                            </div>
                            <div className="inline-flex items-center gap-1">
                                <Scan variant="Linear" size={15} /> QR code
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <Image
                                    src={"/images/image 6.svg"}
                                    width={14}
                                    height={14}
                                    alt="image"
                                />
                                <Image
                                    src={"/images/image 7.svg"}
                                    width={14}
                                    height={14}
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-10 py-3 text-white bg-[#A15DDF] rounded-[80px] "
                        >
                            Pay now
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
