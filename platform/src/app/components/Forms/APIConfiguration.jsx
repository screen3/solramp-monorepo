'use client';
import React, { useState } from 'react';

export default function APIConfiguration() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form noValidate>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="full_name" className={'text-base w-1/3 text-left'}>
            Live Callback URL
          </label>
          <div className="flex-1 h-12 px-4 border-[#D0D5DD] border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="full_name"
              name="full_name"
              type="text"
              className="w-full bg-transparent outline-0"
              placeholder="https://exampleurl.com"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="email" className={'text-base w-1/3 text-left'}>
            Live Webhook URL
          </label>
          <div className="flex-1 h-12 px-4 border-[#D0D5DD] border mt-2 bg-white bg-opacity-10 rounded-md flex items-center gap-2">
            <input
              id="email"
              name="email"
              type="text"
              className="w-full bg-transparent outline-0"
              placeholder="https://exampleurl.com"
            />
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
