"use client";

import { SettingsIcon } from "@/components/Icons/SettingsIcon";
import { usePathname } from "next/navigation";
import { SideBarLinkItem } from "./SideBarLinkItem";
import { SlidersIcon } from "@/components/Icons/SlidersIcon";
import { GridIcon } from "@/components/Icons/GridIcon";
import { HomeIcon } from "@/components/Icons/HomeIcon";
import { ClockIcon } from "@/components/Icons/ClockIcon";
import { DocumentIcon } from "@/components/Icons/DocumentIcon";
import { ChartSimpleIcon } from "@/components/Icons/ChartSimpleIcon";
import { AcceptDocumentIcon } from "@/components/Icons/AcceptDocumentIcon";
import PieChatIcon from "@/components/Icons/PieChatIcon";

const testConfigurationLinks = [
  {
    id: 1,
    route: "#",
    title: "basic settings",
    linkIcon: (isActive: boolean) => (
      <SettingsIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
  {
    id: 2,
    route: "/dashboard/question-manager",
    title: "question manager",
    linkIcon: (isActive: boolean) => (
      <SlidersIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
  {
    id: 3,
    route: "#",
    title: "question settings",
    linkIcon: (isActive: boolean) => (
      <GridIcon className="w-5 h-5" color={isActive ? "#374258" : "#75819A"} />
    ),
  },

  {
    id: 4,
    route: "#",
    title: "test start page",
    linkIcon: (isActive: boolean) => (
      <HomeIcon className="w-5 h-5" color={isActive ? "#374258" : "#75819A"} />
    ),
  },

  {
    id: 5,
    route: "",
    title: "time settings",
    linkIcon: (isActive: boolean) => (
      <ClockIcon className="w-5 h-5" color={isActive ? "#374258" : "#75819A"} />
    ),
  },

  {
    id: 6,
    route: "#",
    title: "grading and summary",
    linkIcon: (isActive: boolean) => (
      <DocumentIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
];

const testProgressAndResultLinks = [
  {
    id: 1,
    route: "#",
    title: "test results",
    linkIcon: (isActive: boolean) => (
      <ChartSimpleIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
  {
    id: 2,
    route: "#",
    title: "test sheets review",
    linkIcon: (isActive: boolean) => (
      <AcceptDocumentIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
  {
    id: 3,
    route: "/",
    title: "statistics",
    linkIcon: (isActive: boolean) => (
      <PieChatIcon
        className="w-5 h-5"
        color={isActive ? "#374258" : "#75819A"}
      />
    ),
  },
];

export const SideBarSection = ({
  showSideBarMenu,
  setShowSideBarMenu,
}: {
  showSideBarMenu: boolean;
  setShowSideBarMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //
  const pathname = usePathname();

  return (
    <aside
      className={`absolute z-10 top-0 bottom-0 left-0 
        md:relative w-[85%] transform max-w-[327px] pt-[85px] md:pt-[103px]
         pb-6 px-5 h-full bg-whiteColor shadow-md transition-all duration-300
    ${
      showSideBarMenu ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"
    } `}
    >
      <div className="w-full h-full overflow-y-scroll scrollbar-none">
        {/* Test configuration */}
        <section>
          <h2 className="text-lg capitalize text-textColor/90 font-[family-name:var(--font-bold)]">
            Test configuration
          </h2>

          <div className="flex mt-4 flex-col space-y-[8px]">
            {testConfigurationLinks.map((link) => (
              <SideBarLinkItem
                key={link.id}
                isLinkActive={link.route === pathname}
                title={link.title}
                linkIcon={link.linkIcon(link.route === pathname)}
                route={link.route}
                onClick={()=>setShowSideBarMenu(false)}
              />
            ))}
          </div>
        </section>

        {/* Test progress and results */}
        <section className="mt-10">
          <h2 className="text-lg capitalize text-textColor/90 font-[family-name:var(--font-bold)]">
            Test progress and results
          </h2>

          <div className="flex mt-4 flex-col space-y-[8px]">
            {testProgressAndResultLinks.map((link) => (
              <SideBarLinkItem
                key={link.id}
                isLinkActive={link.route === pathname}
                title={link.title}
                linkIcon={link.linkIcon(link.route === pathname)}
                route={link.route}
                onClick={()=>setShowSideBarMenu(false)}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};
