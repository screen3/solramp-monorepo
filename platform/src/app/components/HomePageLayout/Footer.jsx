import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='bg-white py-12'>
        <div className="container px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className='text-[#344054] font-semibold text-lg mb-4'>Contact</h4>
              <Link href="mailto:hello@solramp.finance">
                hello@solramp.finance
              </Link>
            </div>
            <div>
              <h4 className='text-[#344054] font-semibold text-lg mb-4'>Developer</h4>
              <div className='text-[#344054] text-lg flex items-center justify-start gap-4 font-medium flex-wrap mb-4'>
                <Link href="/">Documentation</Link>
                <Link href="/">Integrations</Link>
                <Link href="/">Video Tutorials</Link>
              </div>
              <p className='text-[#909295]'>Copyright &copy; SolRamp. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
