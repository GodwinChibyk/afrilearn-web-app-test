import { Button } from "@/components/Global/Button";
import { PlusIcon } from "@/components/Icons/PlusIcon";
import { SortAltIcon } from "@/components/Icons/SortAltIcon";
import React from "react";

export const AddQuestionSection = () => {
  return (
    <div className="p-5 mt-10 flex flex-row items-center justify-between bg-whiteColor shadow-md shadow-grayColor/10">
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
          title="reorder questions"
          className="px-2 py-2 bg-transparent transition-all hover:bg-grayColor/10"
          titleClassName="text-textColor"
        >
          <SortAltIcon className="mr-2 h-5 w-5" />
        </Button>
        <div>
          <Button
            title="Add question"
            className="px-2 py-2 space-x-2 transition-all hover:bg-primaryColor/90"
            titleClassName="font-[family-name:var(--font-semibold)]"
          >
            <PlusIcon className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};
