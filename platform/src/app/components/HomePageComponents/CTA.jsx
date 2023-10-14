import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CTA() {
  return (
    <div className="bg-[#400A72] py-20 text-center relative">
      <div className="container flex flex-col gap-5 py-5 space-y-5">
        <h2 className="text-4xl text-white font-semibold">
          Start accepting payments today
        </h2>
        <div>
          <Link
            href="/auth/login"
            className="w-full md:w-2/3 rounded-[80px] text-white bg-[#A15DDF] py-3 px-10"
          >
            Get started today!
          </Link>
        </div>
      </div>
      <Image
        src={'/images/Ellipse 2.svg'}
        alt="ellipse"
        width={150}
        height={100}
        className="w-auto h-auto absolute bottom-0 left-10 pointer-events-none"
      />
      <Image
        src={'/images/Ellipse 3.svg'}
        alt="ellipse"
        width={150}
        height={100}
        className="w-auto h-auto absolute top-0 right-10 pointer-events-none"
      />
      <Image
        src={'/images/Ellipse 4.svg'}
        alt="ellipse"
        width={150}
        height={100}
        className="w-auto h-auto absolute top-0 left-0 pointer-events-none"
      />
      <Image
        src={'/images/Ellipse 5 (1).svg'}
        alt="ellipse"
        width={150}
        height={100}
        className="w-auto h-auto absolute bottom-0 right-0 pointer-events-none"
      />
    </div>
  );
}
