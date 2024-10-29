import React from "react";

export const PIeChartCard = ({
  title,
  percentage,
  averageOne,
  averageTwo,
}: {
  title: string;
  percentage: number;
  averageOne?: number;
  averageTwo?: number;
}) => {
  return (
    <div className="bg-whiteColor flex flex-row justify-between shadow-md shadow-grayColor/5 p-[25px] rounded-lg">
      <div>
        <p className="text-2xl text-textColor/60 font-[family-name:var(--font-bold)] tracking-wide">
          {title}
        </p>
      </div>
      <div className="w-[196px] h-[196px] rounded-full border-[10px] border-primaryColor flex flex-col items-center justify-center">
        <p className="text-3xl text-textColor font-[family-name:var(--font-semibold)]">
          {percentage}%
        </p>
        {averageOne && averageTwo ? (
          <p className="text-sm mt-1 tracking-wide text-textColor/70 font-[family-name:var(--font-medium)] ">
            {averageOne} / {averageTwo}
          </p>
        ) : null}
      </div>
    </div>
  );
};
