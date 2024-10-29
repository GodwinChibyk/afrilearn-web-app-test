import { FC } from "react";

interface QuestionTopicProps {
  color: string;
  percentageValue: number;
  totalScore: number;
  averageScore: number;
}

export const QuestionTopic: FC<QuestionTopicProps> = ({
  color,
  percentageValue,
  totalScore,
  averageScore,
}) => {
  return (
    <div className="flex flex-row items-center space-x-[6px] h-[38px] w-full">
      <div
        className="w-2 h-full rounded-lg"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex-1 h-full border border-[#D1DAE4] relative rounded-lg">
        <div
          className="absolute top-0 bottom-0 rounded-lg transition-all duration-500"
          style={{ width: `${percentageValue}%`, backgroundColor: color }}
        />
        <div className="absolute inset-0 px-[10px] flex flex-row items-center justify-between">
          <p className="text-textColor text-[12px] uppercase font-[family-name:var(--font-bold)]">
            flowering plants
          </p>
          <div className="flex flex-row items-center space-x-5">
            <p className="text-textColor/90 text-base sm:text-lg tracking-wide font-[family-name:var(--font-bold)]">
              {percentageValue}%
            </p>
            <p className="text-xs sm:text-base text-textColor/70 font-[family-name:var(--font-medium)]">
              {averageScore} / {totalScore}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
