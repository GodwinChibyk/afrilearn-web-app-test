import React from "react";
import { QuestionTopic } from "./QuestionTopic";
import { questionScores } from "@/base/dummyData/questionScores";

export const ScorePerQuestionSection = () => {
  return (
    <section className="mt-8 w-full bg-whiteColor shadow-md shadow-grayColor/10 p-[12px] md:p-[25px] rounded-lg">
      <h3 className="uppercase text-sm md:text-base text-textColor/70 font-[family-name:var(--font-semibold)]">
        Score Per Question topic (9)
      </h3>

      {/*  */}
      <div className="mt-[30px] h-auto flex flex-row flex-wrap">
        {[...questionScores].map((item) => (
          <div
            key={item.id}
            className="w-full xl:max-w-[400px] 2xl:max-w-[500px] 3xl:max-w-[650px] mb-5 md:mr-5"
          >
            <QuestionTopic
              averageScore={15}
              color={item.colorCode}
              percentageValue={item.percentage}
              totalScore={30}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
