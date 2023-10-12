import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import MainComponent from '../../components/MainComponent';
import Link from 'next/link';

const Transactions = () => {
  return (
    <div>
      <PageTitle title={'Transactions'} />

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
              <tr>
                <td className="px-5 py-5 text-sm whitespace-nowrap">
                  <span className="w-3 h-3 full text-base bg-[#08B639] font-semibold block rounded-full "></span>
                </td>
                <td className="px-5 py-5 text-sm whitespace-nowrap">
                  <p className="text-sm text-[#667085]">NGN 10,000</p>
                </td>
                <td className="px-5 py-5  text-sm whitespace-nowrap">
                  <div className="flex items-start justify-start flex-col gap-1 w-full">
                    <h5 className="text-base text-[#667085] font-semibold">
                      Christina Macaroni
                    </h5>
                    <p className="text-sm text-[#667085]">
                      chrisroni@gmail.com
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm whitespace-nowrap">
                  <p className="text-sm text-[#667085]">FUItr5689HkIJJU7</p>
                </td>
                <td className="px-5 py-5 text-sm whitespace-nowrap">
                  <span className="px-10 py-2 text-sm text-[#667085] border border-[#E8E8E8] rounded-full">
                    Card
                  </span>
                </td>
                <td className="px-5 py-5 text-sm whitespace-nowrap">
                  <p className="text-sm text-[#667085]">
                    Monday, 10 October 2023 . 12:23pm
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </MainComponent>
    </div>
  );
};

export default Transactions;
