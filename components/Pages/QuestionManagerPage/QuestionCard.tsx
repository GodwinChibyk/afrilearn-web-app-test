"use client";

import { IQuestion } from "@/base/dummyData/questions";
import Image from "next/image";
import React, { FC } from "react";

interface QuestionCardProps {
  question: IQuestion;
}

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  //
  const [selectedAnswer, setSelectedAnswer] = React.useState("option2");

  return (
    <article className="w-full mt-[30px] relative bg-white shadow-md shadow-grayColor/10 rounded-lg overflow-hidden">
      <div className="lg:p-6 p-4 flex flex-col lg:flex-row lg:space-x-8">
        {/*  */}
        <label
          htmlFor={`question-${question.questionNumber}`}
          className={`h-[30px] w-[30px] absolute group rounded-lg border-2 border-[#989CAD] has-[:checked]:border-primaryColor has-[:checked]:bg-primaryColorLight/30 cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <input
            id={`question-${question.questionNumber}`}
            type="checkbox"
            value=""
            className="sr-only"
          />
        </label>

        {/*  */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
            <span className="text-lg text-textColor ml-[40px] lg:ml-5 font-[family-name:var(--font-semibold)]">
              Q. {question.questionNumber}
            </span>
            <div className="flex items-center mt-3 lg:mt-0 space-x-6">
              <span className="text-base lg:text-lg text-textColor/60 font-[family-name:var(--font-medium)]">
                Topic{"  "}
                <span className="ml-1 block lg:inline font-[family-name:var(--font-medium)] text-textColor">
                  Farm tools
                </span>
              </span>
              <span className="text-base lg:text-lg text-textColor/60 font-[family-name:var(--font-medium)]">
                Type{" "}
                <span className="ml-1 block lg:inline font-[family-name:var(--font-medium)] text-textColor">
                  Single choice
                </span>
              </span>
              <span className="text-base lg:text-lg text-textColor/60 font-[family-name:var(--font-medium)]">
                Points{" "}
                <span className="ml-1 block lg:inline font-[family-name:var(--font-medium)] text-textColor">
                  1
                </span>
              </span>
            </div>
          </div>

          {/*  */}
          {question.imageUrl ? (
            <div className="relative w-full max-w-[230px] h-[220px]">
              <Image
                src={question.imageUrl}
                alt="question 1 image"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          ) : null}

          {/*  */}
          <div className="mt-8 pr-5">
            <p className="mb-4 text-textColor/90 text-base md:text-lg font-[family-name:var(--font-medium)]">
              {question.question}
            </p>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center py-3 px-5 rounded-md cursor-pointer ${
                    selectedAnswer === `option${index + 1}`
                      ? "bg-primaryColorLight/30"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`${option}-${question.questionNumber}`}
                    value={`option${index + 1}`}
                    checked={selectedAnswer === `option${index + 1}`}
                    onChange={() => setSelectedAnswer(`option${index + 1}`)}
                    className="hidden peer"
                  />
                  <span className="w-[30px] peer-checked:border-primaryColor h-[30px] mr-4 rounded-full border-[3px] border-[#989CAD]"></span>
                  <span className="text-base md:text-lg text-textColor/90 font-[family-name:var(--font-medium)]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
