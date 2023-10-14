import { Bank, Scan } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

export default function LandingHeroForm() {
  return (
    <>
      <form className="z-20">
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
              <label className=" font-medium mb-3" htmlFor="curr">
                Currency
              </label>
              <select
                id="curr"
                defaultValue={1}
                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="curr"
              >
                <option value={1}>🇦🇪 AED</option>
                <option value={2}>🇺🇸 USD</option>
                <option value={3}>🇳🇬 NGN</option>
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <label className="font-medium mb-3" htmlFor="crypto">
                Crypto
              </label>
              <select
                id="crypto"
                defaultValue={1}
                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="crypto"
              >
                <option value={1}>USDT</option>
                <option value={2}>USDC</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="w-full md:w-1/2">
              <label className="font-medium mb-3" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className=" font-medium mb-3" htmlFor="address">
                Enter recipients address
              </label>
              <input
                id="address"
                type="text"
                className="block w-full h-12 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-gray-400 rounded-md focus:outline-none focus:ring-none"
                name="address"
                autoComplete="off"
                placeholder='HN7cABqLq.....ELLLsHHe4YWrH'
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap mt-4">
          <div>
            <h5 className="font-medium text-[#474545] text-sm mb-2">
              We accept
            </h5>
            <div className="flex items-center justify-start text-[#959697] text-xs font-medium gap-3">
              <div className="inline-flex items-center gap-1">
                <Bank variant="Outline" size={15} className='text-[#A15DDF]'/>
                Bank Transfer
              </div>
              <div className="inline-flex items-center gap-1">
                <Image
                  src={'/images/transferwise.svg'}
                  width={12}
                  height={12}
                  alt="transferwise"
                  className='w-auto h-auto'
                />{' '}
                Transferwise
              </div>
              <div className="inline-flex items-center gap-1">
                <Scan variant="Linear" size={15} /> QR code
              </div>
              <div className='inline-flex items-center gap-2'>
                <Image
                  src={'/images/image 6.svg'}
                  width={14}
                  height={14}
                  alt="image"
                />
                <Image
                  src={'/images/image 7.svg'}
                  width={14}
                  height={14}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="px-10 py-3 text-white bg-[#A15DDF] rounded-[80px] ">
              Pay now
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
