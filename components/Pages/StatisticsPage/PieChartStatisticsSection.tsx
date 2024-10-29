"use client";
import { PIeChartCard } from "@/components/Global/Cards/PIeChartCard";
import React from "react";

export const PieChartStatisticsSection = () => {
  return (
    <section className="mt-10 grid grid-cols-3 gap-x-[25px]">
      <PIeChartCard
        title="Attended"
        percentageValue={100}
        averageOne={30}
        averageTwo={20}
        pieChartHeight={196}
        pieChartWidth={196}
      />
      <PIeChartCard
        title="Above Avg."
        percentageValue={75}
        averageOne={22}
        averageTwo={20}
        pieChartHeight={196}
        pieChartWidth={196}
      />
      <PIeChartCard
        title="Average score"
        percentageValue={50}
        pieChartHeight={196}
        pieChartWidth={196}
      />
    </section>
  );
};
