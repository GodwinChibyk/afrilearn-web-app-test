import React from "react";
import { NavSection } from "./NavSection";
import { SideBarSection } from "./SideBarSection/SideBarSection";

export const DashboardLayoutIndex = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-screen flex-1 relative font-[family-name:var(--font-regular)] bg-bgColor">
      {/* nav section */}
      <NavSection />

      {/* main section */}
      <div className="absolute inset-0 flex flex-row space-x-7">
        <SideBarSection />
        <div className="flex-1 h-full bg-bgColor border-2 border-blue-600">{children}</div>
      </div>
    </div>
  );
};
