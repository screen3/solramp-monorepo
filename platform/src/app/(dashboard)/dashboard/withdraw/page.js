import WithdrawForm from '@/src/app/components/Forms/WithdrawForm';
import { PageTitle } from '@/src/app/components/PageTitle';
import React from 'react';

const Withdraw = () => {
  return (
    <div>
      <PageTitle title={'Dashboard'} submenu={'Withdraw'} />

      <section className="bg-white rounded-lg py-2 mb-5 border border-[#E4E7EC]">
        <div className=" w-full  relative  shadow-box  py-4">
          <div className="">
            <h3 className="text-center text-2xl text-[#11161F] font-medium">Create withdrawal</h3>
          </div>
          <div className="flex items-center justify-center  py-3 lg:py-5 w-full ">
            <div className="mx-auto max-w-3xl px-5 lg:py-0 py-6  text-center  text-sm border-0 w-full ">
              <WithdrawForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdraw;
