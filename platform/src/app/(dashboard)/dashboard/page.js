'use client';

import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import MainComponent from '../../components/MainComponent';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon } from '../../components/IconComponent';
import { Dropdown, Space } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import AnalyticsChart from '../../components/Charts/AnalyticsChart';
import Link from 'next/link';

const Dashboard = () => {
  const address = 'HN7cABqLq23RV4V5455EL4YWrH';
  const [value, setValue] = React.useState(null);
  const [copied, setCopied] = React.useState(false);
  const onCopy = React.useCallback(() => {
    // setValue(address);
    setCopied(true);
    toast.success('Successfully copied!');
  }, []);

  const data = [];

  return (
    <>
      <Toaster />
      <div>
        <PageTitle title={'Dashboard'} />

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 w-full gap-5 ">
            <div className="shadow-3xl  bg-white rounded-lg border border-[#F2F1F1]">
              <AnalyticsChart data={data} />
            </div>
            <div className=" ">
              <div className="bg-white shadow-3xl  py-4 mb-4  px-2 md:px-5 rounded-lg border border-[#F2F1F1]">
                <div className="w-full wallet_card rounded-lg h-58 h-60 bg-slate-500">
                  <div className="py-5 h-full text-white">
                    <div className="w-full border-b border-gray-200 h-10">
                      <div className="flex items-center justify-between px-3 py-2 h-full">
                        <h4>Wallet</h4>
                        <div>
                          <select
                            className="px-2 bg-transparent focus-visible:outline-none focus-within:outline-none focus:outline-none text-white "
                            defaultValue={0}
                          >
                            <option className="text-gray-600" value={0}>
                              USDT
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className=" h-full flex items-center px-3 max-h-48">
                      <div className="">
                        <h3 className="text-3xl text-white font-medium">
                          525.86
                        </h3>
                        <p className="text-sm text-white">Available balance</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h5>Solana address</h5>

                    <CopyToClipboard
                      onCopy={onCopy}
                      options={{ message: 'Copied!' }}
                      text={address}
                      className={`text-sm rounded-lg flex items-center gap-2 text-[#344054]`}
                    >
                      <button className="">
                        <h6>HN7cABqLq.....EL4YWrH</h6>
                        <CopyIcon className={`h-4 w-4`} />
                        {/* <span className={`${copied ? 'text-[#08B639]':''}`}> {copied ? 'Copied' : ''}</span> */}
                      </button>
                    </CopyToClipboard>
                  </div>
                  <Link href={'/dashboard/withdraw'} className="px-10 py-2 border border-[#A7ADB7] text-[#334155] rounded-lg">
                    Withdraw
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
