'use client';
import React, { useState } from 'react';

const Preferences = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <form noValidate>
      <div className="flex flex-col gap-3">
        <p className={'text-base w-1/3 text-left'}>Payment Preferences</p>
        <div className="flex items-center justify-between gap-3">
          <label
            htmlFor="default_currency"
            className={'text-base w-1/3 text-left'}
          >
            Default Currency
          </label>
          <div className="flex-1 h-12 px-4 border-[#D0D5DD] border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="full_name"
              name="full_name"
              type="text"
              className="w-full bg-transparent outline-0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="email" className={'text-base w-1/3 text-left'}>
            Preferred payments
          </label>
          <div className="mt-2 bg-white bg-opacity-10 rounded-md flex items-center justify-start gap-2 w-2/3">
            <div className='flex items-center gap-2'>
              <input
                id="bank"
                name="bank"
                type="checkbox"
                className="w-4 bg-transparent outline-0 h-4 border-[#D0D5DD] border rounded-md "
              />
              <label htmlFor="bank">Bank Transfer</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                id="transferwise"
                name="transferwise"
                type="checkbox"
                className="w-4 bg-transparent outline-0 h-4 border-[#D0D5DD] border rounded-md "
              />
              <label htmlFor="transferwise">Transferwise</label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                id="qr_code"
                name="qr_code"
                type="checkbox"
                className="w-4 bg-transparent outline-0 h-4 border-[#D0D5DD] border rounded-md "
              />
              <label htmlFor="qr_code">QR code</label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-semibold rounded-[80px]  p-2.5 w-full md:w-1/3 bg-white border border-[#DBDBDB] text-[#344054] h-12 text-center disabled:opacity-30 mt-5"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Preferences;
