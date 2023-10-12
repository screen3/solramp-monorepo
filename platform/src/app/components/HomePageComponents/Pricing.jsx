import React from 'react';

export default function Pricing() {
  return (
    <section className="py-20 bg-[#2A034D]" id="pricing">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 items-center">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-4xl  font-semibold">
              Simple, Fair Pricing
            </h2>
            <div className="space-y-4 mt-4">
              <p>Solswap only makes money when your business do</p>
              <p>
                0.5% + Solana transaction fee on every transaction capped at $10
              </p>
              <p>
                2% + Solana transaction fee / Bank transfer fee on every
                settlement
              </p>
            </div>
          </div>
          <div className="pricing_box py-4 px-3 text-white rounded-lg">
            <div className="py-4 px-4">
              <form className="flex flex-col gap-4">
                <div>
                  <label
                    className="font-bolder mb-3"
                    htmlFor="c_pay"
                  >
                    If Customer pay
                  </label>
                  <input
                    id="c_pay"
                    type="text"
                    className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                    name="c_pay"
                    autoComplete="off"
                  />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="w-full md:w-1/2">
                    <label
                      className=" font-bolder mb-3"
                      htmlFor="y_get"
                    >
                      You get
                    </label>
                    <input
                      id="y_get"
                      type="text"
                      readOnly
                      className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                      name="y_get"
                      autoComplete="off"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      className="font-bolder mb-3"
                      htmlFor="s_fees"
                    >
                      Solramp fees (0.5%)
                    </label>
                    <input
                      id="s_fees"
                      type="text"
                      className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                      name="s_fees"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
