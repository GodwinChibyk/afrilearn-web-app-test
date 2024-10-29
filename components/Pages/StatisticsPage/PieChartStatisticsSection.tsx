"use client";
import { PIeChartCard } from "@/components/Global/Cards/PIeChartCard";
import React, { useEffect, useState } from "react";

export const PieChartStatisticsSection = () => {
  //
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mt-10 grid gap-y-[25px] 1xl:grid-cols-2 2xl:grid-cols-3 gap-x-[25px]">
      <PIeChartCard
        title="Attended"
        percentageValue={100}
        averageOne={30}
        averageTwo={20}
        pieChartHeight={windowWidth < 600 ? 150 : 196}
        pieChartWidth={windowWidth < 600 ? 150 : 196}
      />
      <PIeChartCard
        title="Above Avg."
        percentageValue={75}
        averageOne={22}
        averageTwo={20}
        pieChartHeight={windowWidth < 600 ? 150 : 196}
        pieChartWidth={windowWidth < 600 ? 150 : 196}
      />
      <PIeChartCard
        title="Average score"
        percentageValue={50}
        pieChartHeight={windowWidth < 600 ? 150 : 196}
        pieChartWidth={windowWidth < 600 ? 150 : 196}
      />
    </section>
  );
};
