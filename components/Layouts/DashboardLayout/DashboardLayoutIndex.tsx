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
      <div className="absolute inset-0 flex flex-row space-x-8">
        <SideBarSection />
        <div className="flex-1 h-full pt-[120px] pr-[30px] bg-bgColor overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};
