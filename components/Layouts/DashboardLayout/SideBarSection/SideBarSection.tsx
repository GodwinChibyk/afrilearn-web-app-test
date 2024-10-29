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
    linkIcon: <SettingsIcon className="w-5 h-5" />,
  },
  {
    id: 2,
    route: "/question-manager",
    title: "question manager",
    linkIcon: <SlidersIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    route: "#",
    title: "question settings",
    linkIcon: <GridIcon className="w-5 h-5" />,
  },

  {
    id: 4,
    route: "#",
    title: "test start page",
    linkIcon: <HomeIcon className="w-5 h-5" />,
  },

  {
    id: 5,
    route: "",
    title: "time settings",
    linkIcon: <ClockIcon className="w-5 h-5" />,
  },

  {
    id: 6,
    route: "#",
    title: "grading and summary",
    linkIcon: <DocumentIcon className="w-5 h-5" />,
  },
];

const testProgressAndResultLinks = [
  {
    id: 1,
    route: "#",
    title: "test results",
    linkIcon: <ChartSimpleIcon className="w-5 h-5" />,
  },
  {
    id: 2,
    route: "#",
    title: "test sheets review",
    linkIcon: <AcceptDocumentIcon className="w-5 h-5" />,
  },
  {
    id: 3,
    route: "/statistics",
    title: "statistics",
    linkIcon: <PieChatIcon className="w-5 h-5" />,
  },
];

export const SideBarSection = () => {
  //
  const pathname = usePathname();

  return (
    <aside className="w-[327px] pt-[103px] pb-6 px-5 h-full bg-whiteColor shadow-md ">
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
                linkIcon={link.linkIcon}
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
                linkIcon={link.linkIcon}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};
