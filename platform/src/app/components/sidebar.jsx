"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import {
    ArrowDown2,
    Buildings,
    Profile2User,
    RecordCircle,
    Message,
} from "iconsax-react";
import Image from "next/image";
import { ArrowDown, Category } from "react-iconly";

const Sidebar = () => {
    const [isCollapsible, setIsCollapsible] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const wrapperClasses = classNames(
        "h-full sidebar pb-4 bg-white flex justify-between shadow-sm scrollbar-change flex-col overflow-y-auto overflow-x-hidden border-r border-[#EDEFF3] w-80"
    );

    const menuLinks = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: <Category size={20} />,
        },
        {
            label: "Transactions",
            href: "/transactions",
            icon: <Profile2User size={20} />,
        },
        {
            label: "Integrations",
            href: "/integrations",
            icon: <RecordCircle size={20} />,
        },
        {
            label: "Support",
            href: "mailto:info@solramp.com",
            icon: <Message size={20} />,
        },
    ];

    return (
        <>
            <div
                className={wrapperClasses}
                style={{
                    transition: "width 0s ease-in-out 0s ",
                }}
            >
                <div className="flex flex-col px-4">
                    <div className="flex items-center justify-center py-5 relative border-b  border-[#8D8E8E] h-20">
                        <div className="px-3 w-full block h-full">
                            <Link
                                href={"/"}
                                className="flex items-center w-full justify-center h-full"
                            >
                                <Image
                                    src="/logo/mainLogo.svg"
                                    height={30}
                                    width={30}
                                    className="transition 300ms ease object-contain w-auto h-auto mr-2"
                                    priority
                                    alt="logo"
                                />
                                <Image
                                    src="/logo/Ramp.svg"
                                    height={100}
                                    width={70}
                                    className="transition 300ms ease object-contain w-auto h-auto"
                                    priority
                                    alt="logo"
                                />
                                {/* <Logo className="transition 300ms ease" /> */}
                            </Link>
                        </div>
                    </div>
                    <nav className="mt-6 md:mt-3 grow ">
                        <div className=" flex-wrap px-4">
                            <div className="bg-[#F2F4F7] px-5 py-4 mb-3 rounded-lg">
                                <button className="flex items-start justify-between w-full">
                                    <div className="flex items-start justify-start gap-2">
                                        <Buildings
                                            variant="Outline"
                                            size={16}
                                            className="mt-1 text-[#A15DDF]"
                                        />
                                        <div className="flex items-start flex-col">
                                            <span className="text-[#11161F] text-sm font-medium">
                                                Business name
                                            </span>
                                            <span className="text-[#909295] text-xs ">
                                                1432665
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowDown2
                                        variant="Outline"
                                        size={12}
                                        className="text-[#81899E]"
                                    />
                                </button>
                            </div>
                            {menuLinks.map((menuItem) => (
                                <Link
                                    key={menuItem.label}
                                    href={`${menuItem.href}`}
                                    className={`menu-item w-full font-thin ${
                                        pathname == menuItem.href ||
                                        pathname.startsWith(`${menuItem.href}/`)
                                            ? "bg-[#F8F3FD] text-[#A15DDF]"
                                            : "text-[#737070]"
                                    }  flex items-center py-4 px-5  my-2 rounded-lg transition-colors duration-200 ease-in hover:bg-[#F8F3FD] hover:text-[#A15DDF] justify-start text-sm`}
                                >
                                    <span className="text-left px-3">
                                        {menuItem.icon}
                                    </span>
                                    <span
                                        className={classNames(
                                            "mx-2 text-sm font-normal "
                                        )}
                                    >
                                        {menuItem.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
