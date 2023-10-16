"use client";
import React, { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import MainComponent from "../../components/MainComponent";
import axios from "axios";

const Transactions = () => {
    const [business, setBusiness] = useState({});
    const [transactions, setTransactions] = useState([]);
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

    const getTransactions = async (ref) => {
        console.log("ref", ref);
        axios
            .get(`${apiURL}/business/${ref}/transaction/all`, {
                withCredentials: true,
            })
            .then((res) => {
                setTransactions(res.data?.transactions);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (business?.id) getTransactions(business?.business_ref);
    }, [business]);

    useEffect(() => {
        console.log("transactions", transactions);
    }, [transactions]);

    return (
        <div>
            <PageTitle title={"Transactions"} />

            <MainComponent>
                <div className="overflow-x-auto md:overflow-x-auto ">
                    <table className="min-w-full leading-normal table-auto overflow-x-auto relative order-table bg-white">
                        <thead className="bg-neutral50 font-normal">
                            <tr className="text-[#667085]">
                                <th
                                    scope="col"
                                    className="px-5 py-3  border-b border-gray-200   text-left text-sm uppercase whitespace-nowrap"
                                >
                                    &nbsp;
                                </th>
                                <th
                                    scope="col"
                                    className="px-5 py-3  border-b border-gray-200   text-left text-sm uppercase whitespace-nowrap"
                                >
                                    Amount
                                </th>

                                <th
                                    scope="col"
                                    className="px-5 py-3 border-b border-gray-200   text-left text-sm uppercase whitespace-nowrap"
                                >
                                    Customer
                                </th>

                                <th
                                    scope="col"
                                    className="px-5 py-3 border-b border-gray-200  text-left text-sm uppercase whitespace-nowrap"
                                >
                                    Reference
                                </th>

                                <th
                                    scope="col"
                                    className="px-5 py-3 border-b border-gray-200  text-left text-sm uppercase whitespace-nowrap"
                                >
                                    Channel
                                </th>
                                <th
                                    scope="col"
                                    className="px-5 py-3 border-b border-gray-200  text-left text-sm uppercase whitespace-nowrap"
                                >
                                    Paid on
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {transactions?.map((transaction, index) => (
                                <tr>
                                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                                        <span className="w-3 h-3 full text-base bg-[#08B639] font-semibold block rounded-full "></span>
                                    </td>
                                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                                        <p className="text-sm text-[#667085]">
                                            {transaction.currency}{" "}
                                            {transaction.amount}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5  text-sm whitespace-nowrap">
                                        <div className="flex items-start justify-start flex-col gap-1 w-full">
                                            <h5 className="text-base text-[#667085] font-semibold">
                                                {transaction.name || "-"}
                                            </h5>
                                            <p className="text-sm text-[#667085]">
                                                {transaction.email || "-"}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                                        <p className="text-sm text-[#667085]">
                                            {transaction.reference}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                                        <span className="px-10 py-2 text-sm text-[#667085] border border-[#E8E8E8] rounded-full">
                                            {transaction.channel}
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                                        <p className="text-sm text-[#667085]">
                                            {transaction.created_at}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainComponent>
        </div>
    );
};

export default Transactions;
