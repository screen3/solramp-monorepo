import React from 'react';
import Sidebar from '../components/sidebar';

export default function layout({ children }) {
  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="flex-1 h-full overflow-y-auto">
          {/* <Navbar handleSidebarToggle={handleSidebarToggle} /> */}

          <main className="main-wrapper">
            <div className="h-full py-12 px-4 md:px-12">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
