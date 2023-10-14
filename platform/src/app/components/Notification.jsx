'use client';

import React, { useState } from 'react';
import { AlertTriangle, CloseIcon } from './IconComponent';

export default function Notification() {
  const [notification, setShowNotification] = useState(true);
  return (
    <div>
      {notification ? (
        <div className="border-[#FEC84B] border bg-[#FFFCF5] text-[#B54708] text-sm py-3 px-3 gap-3 rounded-lg  flex items-center justify-between mb-3">
          <div className=" flex items-center justify-start flex-1 gap-2">
            <AlertTriangle />{' '}
            <p>
              This account can only accept up to 1000 USDC. In order to access
              the full account, KYC must be completed. To request full access,
              send an email to solramp.com.
            </p>
          </div>

          <button onClick={() => setShowNotification(false)}>
            <CloseIcon
              
              className="cursor-pointer"
            />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
