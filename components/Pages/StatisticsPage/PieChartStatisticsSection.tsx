import { PIeChartCard } from "@/components/Global/Cards/PIeChartCard";
import React from "react";

export const PieChartStatisticsSection = () => {
  return (
    <section className="mt-10 grid grid-cols-3 gap-x-[25px]">
      <PIeChartCard
        title="Attended"
        percentage={100}
        averageOne={30}
        averageTwo={20}
      />
      <PIeChartCard
        title="Above Avg."
        percentage={75}
        averageOne={22}
        averageTwo={20}
      />
      <PIeChartCard title="Average score" percentage={50} />
    </section>
  );
};
