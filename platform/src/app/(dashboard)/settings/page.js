'use client';
import WithdrawForm from '@/src/app/components/Forms/WithdrawForm';
import { PageTitle } from '@/src/app/components/PageTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import React from 'react';
import ProfileForm from '../../components/Forms/ProfileForm';
import Preferences from '../../components/Forms/Preferences';
import APIConfiguration from '../../components/Forms/APIConfiguration';

const Settings = () => {
  return (
    <div>
      <PageTitle title={'Settings'} />

      <section className="bg-white rounded-lg py-2 mb-5 border border-[#E4E7EC]">
        <div className=" w-full  relative  shadow-box py-4 px-4">
          <Tabs>
            <TabList className="flex flex-row items-center justify-start w-full tabs-header rounded-md gap-5 mb-3 border-b border-[#F2F2F2]">
              <Tab className="py-3 border-b-4 border-transparent outline-none cursor-pointer tablist__header">
                Profile
              </Tab>
              <Tab className="py-3 border-b-4 border-transparent outline-none cursor-pointer tablist__header">
                Preferences
              </Tab>
              <Tab className="py-3 border-b-4 border-transparent outline-none cursor-pointer tablist__header">
                API Keys and Webhooks
              </Tab>
            </TabList>

            <div className="tab-content py-6">
              <TabPanel>
                <div className="fade-in">
                  <div className="">
                    <h3 className="text-center text-2xl text-[#11161F] font-medium">
                    Profile
                    </h3>
                  </div>
                  <div className="flex items-center justify-center  py-3 lg:py-5 w-full ">
                    <div className="mx-auto max-w-3xl px-5 lg:py-0 py-6  text-center  text-sm border-0 w-full ">
                      <ProfileForm />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="fade-in">
                  <div className="">
                    <h3 className="text-center text-2xl text-[#11161F] font-medium">
                    Preferences
                    </h3>
                  </div>
                  <div className="flex items-center justify-center  py-3 lg:py-5 w-full ">
                    <div className="mx-auto max-w-3xl px-5 lg:py-0 py-6  text-center  text-sm border-0 w-full ">
                      <Preferences />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="fade-in">
                  <div className="">
                    <h3 className="text-center text-2xl text-[#11161F] font-medium">
                    API Configuration
                    </h3>
                  </div>
                  <div className="flex items-center justify-center  py-3 lg:py-5 w-full ">
                    <div className="mx-auto max-w-3xl px-5 lg:py-0 py-6  text-center  text-sm border-0 w-full ">
                      <APIConfiguration />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Settings;
