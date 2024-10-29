import { Button } from "@/components/Global/Button";
import { PlusIcon } from "@/components/Icons/PlusIcon";
import { SortAltIcon } from "@/components/Icons/SortAltIcon";
import React from "react";

export const AddQuestionSection = () => {
  return (
    <div className="lg:p-5 p-3 mt-8 md:mt-10 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-center justify-between bg-whiteColor shadow-md shadow-grayColor/10">
      <section className="flex flex-row items-center space-x-10">
        {/*  */}
        <label
          htmlFor={`questions`}
          className={`h-[30px] w-[30px] group rounded-lg border-2 border-[#989CAD] has-[:checked]:border-primaryColor has-[:checked]:bg-primaryColorLight/30 cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <input
            id={`questions`}
            type="checkbox"
            value=""
            className="sr-only"
          />
        </label>
        <div className="flex flex-row items-center space-x-3 font-[family-name:var(--font-bold)] text-lg">
          <p className="text-textColor/70 uppercase">
            questions
          </p>
          <span className="ml-1 text-textColor">33 / 60</span>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-row items-center space-x-3">
        <Button
          title="Reorder questions"
          className="px-2 py-2 bg-transparent transition-all hover:bg-grayColor/10"
          titleClassName="text-textColor text-sm md:text-base"
        >
          <SortAltIcon className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
        </Button>
        <div>
          <Button
            title="Add question"
            className="px-2 py-2 space-x-2 transition-all hover:bg-primaryColor/90"
            titleClassName="font-[family-name:var(--font-semibold)] text-sm md:text-base"
          >
            <PlusIcon className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};
