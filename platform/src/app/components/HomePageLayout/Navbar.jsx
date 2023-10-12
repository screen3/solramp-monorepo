'use client';
import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <header className="shadow-header shadow-slate-300 shadow-sm z-50">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex  flex-wrap items-center justify-between px-6 py-4">
            <div className="lg:order-1 w-auto lg:w-1/4 lg:text-center">
              <Link
                href="/"
                className="text-xl text-gray-800 font-semibold font-heading"
              >
                <Image
                  src="/logo/ramplogo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
            <div className="block lg:hidden">
              <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500  rounded relative transition-all duration-150 ease-linear ">
                menu
              </button>
            </div>
            <div className="hidden lg:order-2 lg:block w-full lg:w-auto lg:text-center">
              <div className="navbar-menu flex items-center justify-end gap-4  ">
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600 px-5 "
                >
                  Features
                </Link>
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600 px-5 "
                >
                  Integration
                </Link>
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600 px-5 "
                >
                  Developer Docs
                </Link>
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600 px-5 "
                >
                  Support
                </Link>
                <Link
                  href="/"
                  className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600 px-5 "
                >
                  Pricing
                </Link>
                <Link
                  className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-[#A15DDF] hover:bg-white  hover:border-[#A15DDF] hover:border  border border-[#A15DDF] bg-[#A15DDF] rounded-full px-6 py-2 transition duration-300 ease text-sm"
                  href="/auth/login"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
