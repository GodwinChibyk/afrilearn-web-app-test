import Link from "next/link";
import React from "react";

export const SideBarLinkItem = ({
  linkIcon,
  isLinkActive,
  route,
  title,
}: {
  linkIcon: React.ReactNode;
  isLinkActive: boolean;
  route?: string;
  title: string;
}) => {
  return (
    <Link
      href={route ? route : ""}
      className={`flex flex-row items-center space-x-5 rounded-lg p-5 transition-all hover:bg-bgColor/80 ${
        isLinkActive ? "bg-bgColorLight" : "bg-transparent"
      }`}
    >
      {linkIcon}
      <p className="text-base capitalize text-textColor/90 tracking-wide font-[family-name:var(--font-medium)]">
        {title}
      </p>
    </Link>
  );
};
