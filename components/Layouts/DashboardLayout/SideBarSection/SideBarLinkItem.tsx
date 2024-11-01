import Link from "next/link";
import React from "react";

export const SideBarLinkItem = ({
  linkIcon,
  isLinkActive,
  route,
  title,
  onClick,
}: {
  linkIcon: React.ReactNode;
  isLinkActive: boolean;
  route: string;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={route}
      className={`flex flex-row items-center space-x-5 rounded-lg p-3 md:p-5 transition-all hover:bg-bgColor/80 ${
        isLinkActive
          ? "bg-primaryColorLight hover:bg-primaryColorLight/90"
          : "bg-transparent"
      }`}
      onClick={onClick}
    >
      {linkIcon}
      <p
        className={`text-base text-pretty capitalize text-textColor/90 tracking-wide font-[family-name:var(--font-medium)]${
          isLinkActive ? "font-[family-name:var(--font-semibold)]" : ""
        }`}
      >
        {title}
      </p>
    </Link>
  );
};
