"use client";
import React, { useState } from "react";
import { NavSection } from "./NavSection";
import { SideBarSection } from "./SideBarSection/SideBarSection";

export const DashboardLayoutIndex = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //
  const [showSideBarMenu, setShowSideBarMenu] = useState(false);

  return (
    <div className="w-full h-screen flex-1 relative font-[family-name:var(--font-regular)] bg-bgColor overflow-hidden">
      {/* nav section */}
      <NavSection
        setShowSideBarMenu={setShowSideBarMenu}
        showSideBarMenu={showSideBarMenu}
      />

      {/* main section */}
      <div className="absolute inset-0 flex flex-row space-x-4 sm:space-x-20 md:space-x-10">
        <SideBarSection showSideBarMenu={showSideBarMenu} />
        <div className="flex-1 h-full pt-[120px] pr-4 sm:pr-[80px] md:pr-[30px] bg-bgColor overflow-y-scroll scrollbar scrollbar-thumb-grayColor/70 scrollbar-track-bgColor scrollbar-thumb-rounded-full hover:scrollbar-thumb-grayColor/80">
          {children}
        </div>
      </div>

      {/* mobile / tablet below @768px*/}
      {showSideBarMenu ? (
        <div
          onClick={() => setShowSideBarMenu(false)}
          className="fixed inset-0 w-full md:hidden bg-black/20"
        ></div>
      ) : null}
    </div>
  );
};
