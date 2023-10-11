import React from 'react';
import { PageTitle } from '../../components/PageTitle';

const Integrations = () => {
  return (
    <div>
      <PageTitle title={'Integrations'} />

      <section className="bg-white rounded-lg py-2 mb-5 border border-[#E4E7EC]">
        <div className=" w-full  relative  shadow-box  py-4">
          <div className="">
            <h3 className="text-center text-xl">Install Widget</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:divide-x divide-y lg:divide-y-0 divide-slate-200 py-3 lg:py-5   w-full ">

          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
