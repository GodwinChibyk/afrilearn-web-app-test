import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const PIeChartCard = ({
  title,
  percentageValue,
  averageOne,
  averageTwo,
  pieChartWidth,
  pieChartHeight,
}: {
  title: string;
  percentageValue: number;
  averageOne?: number;
  averageTwo?: number;
  pieChartWidth: number;
  pieChartHeight: number;
}) => {
  //
  const data = [
    { name: "Group A", value: 100 - percentageValue },
    { name: "Group B", value: percentageValue ?? 100 },
  ];
  //
  const colorRange =
    percentageValue < 40 ? "red" : percentageValue < 70 ? "#FFDF37" : "#0BC279";

  return (
    <div className="bg-whiteColor flex flex-row justify-between shadow-md shadow-grayColor/10 p-[18px] md:p-[25px] rounded-lg">
      <div>
        <p className="text-xl md:text-2xl text-textColor/60 font-[family-name:var(--font-bold)] tracking-wide">
          {title}
        </p>
      </div>

      {/*  */}
      <div className="relative">
        <ResponsiveContainer width={pieChartWidth} height={pieChartHeight}>
          <PieChart
            width={pieChartWidth}
            height={pieChartHeight}
            onMouseEnter={() => {}}
          >
            <Pie
              data={data}
              cx={pieChartWidth / 2 - 7}
              cy={pieChartHeight / 2 - 7}
              innerRadius={pieChartWidth * 0.4 + 3}
              outerRadius={pieChartHeight / 2 - 2}
              startAngle={-270}
              endAngle={200}
              fill="white"
              paddingAngle={0}
              dataKey="value"
              stroke={`transparent`}
              cornerRadius={10}
            >
              <Cell key={`cell-${data[0].name}`} fill="#F1F5F8" />
              <Cell key={`cell-${data[1].name}`} fill={colorRange} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <p className="flex flex-row items-center justify-center text-3xl text-textColor font-[family-name:var(--font-semibold)]">
            {`${percentageValue.toFixed() ?? 0}%`}
          </p>
          {averageOne && averageTwo ? (
            <p className="text-sm mt-1 text-center tracking-wide text-textColor/70 font-[family-name:var(--font-medium)] ">
              {averageOne} / {averageTwo}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
