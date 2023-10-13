import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import YouInMind from './components/HomePageComponents/YouInMind';
import Integrations from './components/HomePageComponents/Integrations';
import CTA from './components/HomePageComponents/CTA';
import Pricing from './components/HomePageComponents/Pricing';
import Navbar from './components/HomePageLayout/Navbar';
import Footer from './components/HomePageLayout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="bg-[#FCF9FF] py-20 hero relative">
          <div className="container mx-auto max-w-7xl z-20">
            <div className="flex flex-col items-center justify-center gap-x-5 gap-y-12 ">
              <div className="text-center container max-w-3xl mx-auto">
                <div>
                  <h1 className="text-5xl font-extrabold text-[#351F0F]">
                    Checkout with Solramp
                  </h1>
                </div>
                <div className="mb-5 mt-5  ">
                  <p className="text-base text-[#3F3F3F]">
                    Accept crypto payments from non-crypto users. Use our
                    Solramp SDK on your website, available for Vuejs and
                    Reactjs, on your WordPress site, and on your Shopify store.
                  </p>
                </div>
              </div>
              <div className=" w-full max-w-3xl mx-auto z-20 bg-white">
                <div className="pricing_box py-4 px-3 text-[#474545] rounded-lg border border-[#EFEFEF] z-20">
                  <div className="py-2 px-4 w-full z-20">
                    <form className='z-20'>
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="font-medium mb-3" htmlFor="amount">
                            Amount
                          </label>
                          <input
                            id="amount"
                            type="text"
                            className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                            name="amount"
                            autoComplete="off"
                            placeholder="e.g; 1000"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <div className="w-full md:w-1/2">
                            <label className=" font-bolder mb-3" htmlFor="curr">
                              Currency
                            </label>
                            <input
                              id="curr"
                              type="text"
                              className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                              name="curr"
                              autoComplete="off"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <label
                              className="font-bolder mb-3"
                              htmlFor="crypto"
                            >
                              Crypto
                            </label>
                            <input
                              id="crypto"
                              type="text"
                              className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                              name="crypto"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="font-medium mb-3" htmlFor="address">
                            Enter recipients address
                          </label>
                          <input
                            id="address"
                            type="text"
                            className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                            name="address"
                            autoComplete="off"
                            placeholder="HN7cABqLq.....ELLLsHHe4YWrH"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between flex-wrap mt-4">
                        <div>
                          <h5 className="font-medium text-[#474545] text-sm mb-2">
                            We accept
                          </h5>
                          <div className="flex items-center justify-start text-[#959697] text-xs font-medium gap-4">
                            <div>Bank Transfer</div>
                            <div>Transferwise</div>
                            <div>QR code</div>
                          </div>
                        </div>
                        <div>
                          <button className="px-10 py-3 text-white bg-[#A15DDF] rounded-[80px] ">
                            Pay now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-full block absolute top-0 left-0 pointer-events-none'>
            <Image
              src={'/images/MinimalPattern.svg'}
              fill
              className="w-full h-full object-cover"
              alt="pattern"
            />
          </div>
        </div>

        <YouInMind />
        <Pricing />
        <Integrations />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
