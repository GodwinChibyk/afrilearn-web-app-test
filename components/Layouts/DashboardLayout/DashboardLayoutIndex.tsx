import React from "react";
import { NavSection } from "./NavSection";
import { SideBarSection } from "./SideBarSection/SideBarSection";

export const DashboardLayoutIndex = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-screen flex-1 relative font-[family-name:var(--font-regular)] bg-bgColor overflow-hidden">
      {/* nav section */}
      <NavSection />

      {/* main section */}
      <div className="absolute inset-0 flex flex-row space-x-10">
        <SideBarSection />
        <div className="flex-1 h-full pt-[120px] pr-[30px] bg-bgColor overflow-y-scroll scrollbar scrollbar-thumb-grayColor/70 scrollbar-track-bgColor scrollbar-thumb-rounded-full hover:scrollbar-thumb-grayColor/80">
          {children}
        </div>
      </div>
    </div>
  );
};
