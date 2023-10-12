import Image from 'next/image';
import React from 'react';

export default function Integrations() {
  return (
    <section className="py-20 bg-[#F2F4F7]">
      <div className="container">
        <div className="mb-12 text-center max-w-md mx-auto text-[#1A202B]">
          <h2 className=" text-4xl h2 mb-4 font-semibold">Integrations</h2>
        </div>

        <div className="flex items-center justify-center flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-[1000px] mx-auto">
            <div className="flex items-start justify-start gap-4 flex-col max-w-full p-4 py-5 text-center mx-auto bg-white ">
              <div className="w-full relative">
                <Image
                  src="/logo/react.png"
                  width={150}
                  height={150}
                  alt="react"
                  className="object-cover "
                />
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-2xl text-[#11161F] font-semibold ">
                  React JS
                </h4>
                <p className="text-base text-[#6F7072]">
                  Easily integrate Solramp into your ReactJS applications for
                  seamless crypto checkout. Allow non-crypto users to make
                  payments using bank transfers, Transferwise, and Wallet
                  payments, all within the familiar ReactJS environment.
                  Simplify cryptocurrency transactions with Solramp.
                </p>

                <div className="mt-5">
                  <button className="border border-[#3C89FD] text-[#3C89FD] rounded-[80px] py-2 px-10 w-auto mt-4 whitespace-nowrap">
                    Integrate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4 flex-col max-w-full p-4 py-5 text-center mx-auto bg-white ">
              <div className="w-full relative">
                <Image
                  src="/logo/vue.png"
                  width={130}
                  height={150}
                  alt="react"
                  className="object-cover "
                />
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-2xl text-[#11161F] font-semibold ">
                  Vue JS
                </h4>
                <p className="text-base text-[#6F7072]">
                  Enhance your VueJS applications by integrating Solramp, the
                  crypto checkout solution. With Solramp, you can enable
                  non-crypto users to conveniently pay via bank transfers,
                  Transferwise, and Wallet payments. Seamlessly integrate
                  cryptocurrency payments into your VueJS projects.
                </p>

                <div className="mt-5">
                  <button className="bg-[#E7FFEE] text-[#009D2D] rounded-[80px] py-2 px-10 w-auto mt-4 whitespace-nowrap">
                    Coming soon
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4 flex-col max-w-full p-4 py-5 text-center mx-auto bg-white ">
              <div className="w-full relative">
                <Image
                  src="/logo/shopify.png"
                  width={130}
                  height={150}
                  alt="react"
                  className="object-cover "
                />
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-2xl text-[#11161F] font-semibold ">
                  Shopify
                </h4>
                <p className="text-base text-[#6F7072]">
                  Transform your Shopify store into a crypto-friendly e-commerce
                  platform with Solramp integration. Allow non-crypto users to
                  make payments using bank transfers, Transferwise, and Wallet
                  payments. Streamline cryptocurrency transactions on your
                  Shopify store with Solramp.
                </p>

                <div className="mt-5">
                  <button className="bg-[#E7FFEE] text-[#009D2D] rounded-[80px] py-2 px-10 w-auto mt-4 whitespace-nowrap">
                    Coming soon
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4 flex-col max-w-full p-4 py-5 text-center mx-auto bg-white ">
              <div className="w-full relative">
                <Image
                  src="/logo/wordpress.png"
                  width={130}
                  height={150}
                  alt="react"
                  className="object-cover "
                />
              </div>
              <div className="text-left space-y-2">
                <h4 className="text-2xl text-[#11161F] font-semibold ">
                  Wordpress
                </h4>
                <p className="text-base text-[#6F7072]">
                  Enhance your VueJS applications by integrating Solramp, the
                  crypto checkout solution. With Solramp, you can enable
                  non-crypto users to conveniently pay via bank transfers,
                  Transferwise, and Wallet payments. Seamlessly integrate
                  cryptocurrency payments into your VueJS projects.
                </p>

                <div className="mt-5">
                  <button className="bg-[#E7FFEE] text-[#009D2D] rounded-[80px] py-2 px-10 w-auto mt-4 whitespace-nowrap">
                    Coming soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
