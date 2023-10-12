'use client';
import { ArrowDown2, Profile, SearchNormal, User } from 'iconsax-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { DownOutlined } from '@ant-design/icons';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Dropdown, Space, Switch } from 'antd';
import { ArrowDown, Notification } from 'react-iconly';
import { LogoutIcon, SettingIcon } from './IconComponent';
const Navbar = () => {
  const [showMobile, setShowMobile] = useState();
  const [showUserMenu, setShowUserMenu] = useState();
  const [mobMenu, setMobMenu] = useState(false);

  const items = [
    {
      label: (
        <Link href="/settings" className="ml-2">
          Settings
        </Link>
      ),
      key: '0',
      icon: <SettingIcon />,
    },
    {
      label: (
        <Link href="/logout" className="ml-2">
          Log out
        </Link>
      ),
      key: '1',
      icon: <LogoutIcon />,
    },
  ];
  return (
    <>
      <div className="bg-white shadow-header sticky top-0 z-10 h-20 border-b border-[#A7A7A7]">
        <div className="container mx-auto h-full">
          <nav className="flex items-center justify-between flex-wrap  md:px-6 h-full">
            <div className="mt-1 relative rounded-full  items-center  flex h-12 w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                <span className="text-gray-500 px-3">
                  <SearchNormal variant="Linear" className="w-4 h-4" />
                </span>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className=" py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400 bg-[#F4F4F5]"
                placeholder="Type your keywords here..."
                autoComplete="off"
              />
            </div>

            <div className="w-full hidden  lg:flex lg:items-center lg:w-auto">
              <div className="flex items-center w-auto gap-4">
                {/* <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Enable email alerts?
                  </FormLabel>
                </FormControl> */}
                <div className='flex items-center gap-3'>
                  <label htmlFor="switch">Limited</label>
                  <Switch id="switch" />
                </div>

                <div className="flex items-center justify-between gap-3 divide-x ">
                  <div className="">
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <div className="flex gap-3 items-center">
                        <span className=" px-3 py-2 text-[##455A64] bg-[#F4F4F4] transition duration-150 ease-in-out flex items-center justify-center h-10 w-10  rounded-full focus:outline-none focus:ring-0 relative ">
                          <User variant="Linear" className="w-full h-full" />
                        </span>
                        Jeffery Samson
                        <ArrowDown2 size={14} />
                      </div>
                    </Dropdown>
                  </div>
                  <div className="px-4">
                    <Notification set="light" />
                  </div>
                </div>

                <div className="block lg:hidden">
                  <button className="flex items-center  px-3 py-2 border rounded text-[#45CD85] border-[#45CD85] ">
                    <svg
                      className="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
