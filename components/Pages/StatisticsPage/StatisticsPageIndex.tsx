import PieChatIcon from "@/components/Icons/PieChatIcon";
import { PieChartStatisticsSection } from "./PieChartStatisticsSection";
import { ScorePerQuestionSection } from "./ScorePerQuestionSection";

export const StatisticsPageIndex = () => {
  return (
    <div className="pb-8">
      {/*  */}
      <section className="flex flex-row items-center space-x-4">
        <PieChatIcon className="h-[30px] w-[30px]" color="#B2BBCE" />
        <h2 className="text-2xl text-textColor/90 font-[family-name:var(--font-semibold)]">
          Class performance statistics
        </h2>
      </section>

      {/*  */}
      <PieChartStatisticsSection />

      {/*  */}
      <ScorePerQuestionSection />
    </div>
  );
};
