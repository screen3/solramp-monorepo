"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/navbar";
import axios from "axios";

export default function layout({ children }) {
    const [business, setBusiness] = useState({});
    const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    const getProfile = async () => {
        axios
            .get(`${apiURL}/business/owner`, { withCredentials: true })
            .then((res) => {
                setBusiness(res.data?.owner);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <div className="h-screen flex flex-row justify-start">
                <Sidebar business={business} />
                <div className="flex-1 h-full overflow-y-auto">
                    {/* <Navbar/> */}
                    <Header business={business} />

                    <main className="main-wrapper">
                        <div className="h-full py-12 px-4 md:px-12">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
