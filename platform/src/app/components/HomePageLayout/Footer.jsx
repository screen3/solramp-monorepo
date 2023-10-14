"use client";
import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "../IconComponent";

export default function Footer() {
    const icons = ["facebook", "twitter", "instagram", "linkedin", "youtube"];
    return (
        <>
            <footer className="bg-white py-12">
                <div className="container px-4">
                    <div className="flex items-center justify-between flex-wrap gap-4 px-4">
                        <div>
                            <h4 className="text-[#344054] font-semibold text-lg mb-4">
                                Contact
                            </h4>
                            <Link href="mailto:hello@solramp.finance">
                                hello@solramp.finance
                            </Link>

                            <div className="flex items-center justify-start gap-3 mt-5">
                                <FacebookIcon className={"w-6 h-6"}/>
                                <TwitterIcon className={"w-6 h-6"}/>
                                <InstagramIcon className={"w-6 h-6"}/>
                                <LinkedInIcon className={"w-6 h-6"}/>
                                <YoutubeIcon className={"w-6 h-6"}/>
                                {/* {icons.map((icon, index) => (
                                    <TwoIcon
                                        key={index}
                                        icon={`${icon}`}
                                        className={"w-6 h-6"}
                                    />
                                ))} */}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#344054] font-semibold text-lg mb-4">
                                Developer
                            </h4>
                            <div className="text-[#344054] text-sm flex items-center justify-start gap-4 font-medium flex-wrap mb-4">
                                <Link href="/integrations">Documentation</Link>
                                <Link href="/integrations">Integrations</Link>
                                <Link href="/integrations">
                                    Video Tutorials
                                </Link>
                            </div>
                            <p className="text-[#909295]">
                                Copyright &copy; SolRamp. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
