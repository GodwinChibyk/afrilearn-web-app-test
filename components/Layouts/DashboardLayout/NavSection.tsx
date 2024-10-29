import { Button } from "@/components/Global/Button";
import { ArrowLeftIcon } from "@/components/Icons/ArrowLeftIcon";
import { EyeIcon } from "@/components/Icons/EyeIcon";
import { InfoIcon } from "@/components/Icons/InfoIcon";
import { MenuIcon } from "@/components/Icons/MenuIcon";
import { PlayIcon } from "@/components/Icons/PlayIcon";
import React from "react";

const pageRoutes = ["primary 1", "mid term test", "agricultural science"];

export const NavSection = ({
  setShowSideBarMenu,
  showSideBarMenu,
}: {
  setShowSideBarMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBarMenu: boolean;
}) => {
  return (
    <nav className="p-3 md:p-5 sticky z-30 top-0 flex flex-row items-center justify-between bg-whiteColor shadow-md shadow-grayColor/10">
      {/* mobile / tablet below @768px*/}
      <section className="flex flex-row items-center space-x-3 md:hidden">
        <Button
          title=""
          className="px-2 py-2 bg-grayColor/20 transition-all hover:bg-grayColor/10 rounded-md shadow-sm"
          onClick={() => setShowSideBarMenu(!showSideBarMenu)}
        >
          <MenuIcon className="h-6 w-6 stroke-2 fill-grayColor" />
        </Button>
      </section>

      {/*  */}
      <section className="hidden md:flex flex-row items-center space-x-10">
        <Button
          title="assessment"
          titleClassName="text-textColor capitalize tracking-wide"
          className="px-2 py-2 bg-transparent transition-all hover:bg-grayColor/10 font-[family-name:var(--font-medium)]"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
        </Button>
        <div className="hidden lg:flex flex-row items-center space-x-3">
          {pageRoutes.map((route, index) => (
            <div className="flex flex-row items-center space-x-3" key={route}>
              <p className="text-lg xl:text-xl capitalize text-textColor font-[family-name:var(--font-semibold)] tracking-wide">
                {route}
              </p>
              {index !== pageRoutes.length - 1 ? (
                <span className="text-2xl pb-1 text-textColor">.</span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/*  */}
      <section className="flex flex-row items-center space-x-3">
        <Button
          title="Test info"
          className="px-2 py-2 bg-transparent transition-all hover:bg-grayColor/10"
          titleClassName="text-textColor hidden sm:block lg:hidden xl:block"
        >
          <InfoIcon className="mr-2 h-5 w-5" />
        </Button>
        <div className="h-8 border-r-2 border-grayColor/30" />
        <Button
          title="Test preview"
          className="px-2 py-2 bg-transparent transition-all hover:bg-grayColor/10"
          titleClassName="text-textColor hidden sm:block lg:hidden xl:block"
        >
          <EyeIcon className="mr-2 h-5 w-5" />
        </Button>
        <div>
          <Button
            title="Activate test"
            className="px-2 py-2 space-x-2 transition-all hover:bg-primaryColor/90"
            titleClassName="font-[family-name:var(--font-semibold)] hidden sm:block lg:hidden xl:block"
          >
            <PlayIcon className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </nav>
  );
};
