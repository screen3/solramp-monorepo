import Link from 'next/link';
import React from 'react';

export default function CTA() {
  return (
    <div className='bg-[#400A72] py-20 text-center'>
      <div className="container flex flex-col gap-5 py-5 space-y-5">
        <h2 className="text-4xl text-white font-semibold">
          Start accepting payments today
        </h2>
        <div>
          <Link href="/auth/login" className="w-full md:w-2/3 rounded-[80px] text-white bg-[#A15DDF] py-3 px-10">
            Get started today!
          </Link>
        </div>
      </div>
    </div>
  );
}
