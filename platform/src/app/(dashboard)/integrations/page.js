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
    const Text = `<!DOCTYPE html>
<html lang="en">
<body>
<button onclick="openPopup()">Toggle</button>
<script src="popup.js"></script>
<script>
	/** @type {Window.Popup} */
    let instance;
	(() => {
		instance = window.popup.initialize({business: "0292399023"});
    })()

    function openPopup() {
		instance.open({amount: "20000", fiat: "AED", token: "USDC", customer_email: "test@mailinator.com"})
    }
</script>
</body>
</html>`;

    const [value, setValue] = React.useState(Text);
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
                        Install Widget
                    </h3>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-3 lg:py-5 w-full ">
                        <div>
                            <h4>
                                To use solramp apk, on either your Reactjs or
                                Vuejs App
                            </h4>
                            <ul className="list-decimal	px-5">
                                <li>
                                    Place the script before the &lt;/body&gt;
                                    tag
                                </li>
                                <li>
                                    To trigger the popup, we added a simple
                                    button in this code snippet. You can trigger
                                    the popup however you like either by first
                                    accepting the order through a form, such as
                                    the example on the solramp website or
                                    directly pass the customer email, fiat &
                                    token type, amount details.
                                </li>
                                <li>
                                    Lastly, set your business ID in the
                                    initialize function. You can find your
                                    business ID in your solramp dashboard.
                                </li>
                                <li>
                                    Check this{" "}
                                    <Link
                                        href="/"
                                        className="underline text-[#1877F2]"
                                    >
                                        youtube video
                                    </Link>{" "}
                                    of the integration process.
                                </li>
                            </ul>
                        </div>

                        <div className="border border-[#DADADA] rounded-lg p-3 relative">
                            <textarea
                                onChange={onChange}
                                rows={8}
                                className="w-full py-3 px-3 resize-none focus:border-none focus-within:border-none active:border-none focus-visible:border-none focus:outline-none focus-within:outline-none active:outline-none focus-visible:outline-none"
                                value={value}
                                readOnly
                            ></textarea>

                            <CopyToClipboard
                                onCopy={onCopy}
                                options={{ message: "Whoa!" }}
                                text={value}
                                className="text-sm rounded-lg absolute right-0 bottom-0 px-3 py-3 bg-white flex items-center gap-2 border-l border-t border-[#D0D5DD] text-[#A15DDF]"
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
