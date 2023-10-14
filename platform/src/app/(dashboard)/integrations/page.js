"use client";
import React from "react";
import { PageTitle } from "../../components/PageTitle";
import MainComponent from "../../components/MainComponent";
import { CopyIcon } from "../../components/IconComponent";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
import { Textarea } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

const Integrations = () => {
    const reactCode = `"use client";

import Script from "next/script";
import React, { useEffect } from "react";

export default function Home() {

     useEffect(() => {
         if (typeof window !== "undefined") {
             paymentPopup.current = window.popup.initialize({
                 business: "123456789", //Copy your business ID from your dashboard
             });
         }
     }, []);

     const openPaymentPopup = () => {
         paymentPopup.current.open({
             amount: 10,
             fiat: 'AED',
             crypto: 'USDC',
             customer_email: "customer@mailinator.com",
         });
     };
     
    return (
        <>
            <Script src="popup.js" strategy="beforeInteractive" />
            <button onClick={openPaymentPopup}>Accept Fiat Payment</button>
        </>
    );
}`;

const vueCode = ``;

    const [react, setReactCode] = React.useState(reactCode);
    const [vue, setVueCode] = React.useState(vueCode);
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback(({ target: { value } }) => {
        setValue(value);
        setCopied(true);
        toast.success("Successfully copied!");
    }, []);

    const onCopy = React.useCallback(() => {
        setCopied(true);
        toast.success("Successfully copied!");
    }, []);

    return (
        <div>
            <Toaster />
            <PageTitle title={"Integrations"} />

            <MainComponent>
                <div className=" mb-4">
                    <h3 className="text-center text-xl font-medium">
                        ReactJs Example
                    </h3>
                </div>

                <div>
                    {/* grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-3 lg:py-5 */}
                    <div className="w-full ">
                        <div className="border border-[#DADADA] rounded-lg p-3 relative">
                            <textarea
                                onChange={onChange}
                                rows={8}
                                style={{ fontFamily: "monospace" }}
                                className="w-full text-red-700 py-3 px-3 resize-none focus:border-none focus-within:border-none active:border-none focus-visible:border-none focus:outline-none focus-within:outline-none active:outline-none focus-visible:outline-none"
                                value={react}
                                readOnly
                            ></textarea>

                            <CopyToClipboard
                                onCopy={onCopy}
                                options={{ message: "Whoa!" }}
                                text={react}
                                className="text-sm rounded-lg  absolute right-0 bottom-0 px-3 py-3 bg-white flex items-center gap-2 border-l border-t border-[#D0D5DD] text-[#A15DDF]"
                            >
                                <button className="">
                                    <CopyIcon />
                                    <span>
                                        {" "}
                                        {copied
                                            ? "Copied"
                                            : "Copy to Clipboard"}
                                    </span>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

                <div className=" mb-4 mt-4">
                    <h3 className="text-center text-xl font-medium">
                        VueJs Example
                    </h3>
                </div>

                <div>
                    {/* grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-3 lg:py-5 */}
                    <div className="w-full ">
                        <div className="border border-[#DADADA] rounded-lg p-3 relative">
                            <textarea
                                onChange={onChange}
                                rows={8}
                                style={{ fontFamily: "monospace" }}
                                className="w-full text-red-700 py-3 px-3 resize-none focus:border-none focus-within:border-none active:border-none focus-visible:border-none focus:outline-none focus-within:outline-none active:outline-none focus-visible:outline-none"
                                value={vue}
                                readOnly
                            ></textarea>

                            <CopyToClipboard
                                onCopy={onCopy}
                                options={{ message: "Whoa!" }}
                                text={vue}
                                className="text-sm rounded-lg  absolute right-0 bottom-0 px-3 py-3 bg-white flex items-center gap-2 border-l border-t border-[#D0D5DD] text-[#A15DDF]"
                            >
                                <button className="">
                                    <CopyIcon />
                                    <span>
                                        {" "}
                                        {copied
                                            ? "Copied"
                                            : "Copy to Clipboard"}
                                    </span>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </MainComponent>
        </div>
    );
};

export default Integrations;
