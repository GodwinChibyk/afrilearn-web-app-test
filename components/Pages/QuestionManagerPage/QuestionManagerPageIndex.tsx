import { SlidersIcon } from "@/components/Icons/SlidersIcon";
import React from "react";
import { QuestionCard } from "./QuestionCard";
import { questions } from "@/base/dummyData/questions";
import { AddQuestionSection } from "./AddQuestionSection";

export const QuestionManagerPageIndex = () => {
  return (
    <div className="pb-8">
      {/*  */}
      <section className="flex flex-row items-center space-x-4">
        <SlidersIcon className="h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]" color="#B2BBCE" />
        <h2 className="text-xl md:text-2xl text-textColor/90 font-[family-name:var(--font-semibold)]">
          Test info
        </h2>
      </section>

      {/*  */}
      <AddQuestionSection />

      {/* questions */}
      <section>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </section>
    </div>
  );
};
