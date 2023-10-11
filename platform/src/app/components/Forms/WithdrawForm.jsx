'use client';
import React, { useState } from 'react';

const WithdrawForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    console.log('submit');

    setTimeout(()=>{
      setIsSubmitting(false)
    }, 3000)
  };

  return (
    <form noValidate>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="balance" className={'text-base w-1/3 text-left'}>
            Choose Balance
          </label>
          <div className="flex-1 h-12 px-4 border-blue-500 border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="balance"
              name="balance"
              type="text"
              className="w-full bg-transparent outline-0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="recipient" className={'text-base w-1/3 text-left'}>
          Recipient
          </label>
          <div className="flex-1 h-12 px-4 border-blue-500 border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="recipient"
              name="recipient"
              type="text"
              className="w-full bg-transparent outline-0"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="amount" className={'text-base w-1/3 text-left'}>
          Amount to withdraw
          </label>
          <div className="flex-1 h-12 px-4 border-blue-500 border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="amount"
              name="amount"
              type="text"
              className="w-full bg-transparent outline-0"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="font-semibold rounded-[80px] mx-auto p-2.5 w-full md:w-1/3 bg-[#A15DDF] text-white h-12 block text-center disabled:opacity-30 mt-5"
        >
          {isSubmitting ? 'Processing...' : 'Withdraw'}
        </button>
      </div>
    </form>
  );
};

export default WithdrawForm;
