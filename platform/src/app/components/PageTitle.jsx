import React from 'react';

export const PageTitle = ({ title, submenu }) => {
  return (
    <>
      {!submenu ? (
        <>
          <div className=" py-4 mb-6">
            <h1 className="text-2xl font-medium title mb-3 ">{title}</h1>
          </div>
        </>
      ) : (
        <div className=" py-4 mb-6">
          <div className='flex items-center justify-start'>
            <h1 className="text-xl font-normal title ">{title}</h1>
                <span>...</span>
            <h1 className="text-2xl font-medium title">{submenu}</h1>
          </div>
        </div>
      )}
    </>
  );
};
