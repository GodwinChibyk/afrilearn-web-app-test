interface IQuestionScore {
  id: number;
  percentage: number;
  topic: string;
  totalScore: number;
  averageScore: number;
  colorCode: string;
}

export const questionScores: IQuestionScore[] = [
  {
    id: 1,
    percentage: 50,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 15,
    colorCode: "#FFEF9B",
  },
  {
    id: 2,
    percentage: 25,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 8,
    colorCode: "#EFD8E5",
  },
  {
    id: 3,
    percentage: 50,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 15,
    colorCode: "#D2F0BB",
  },
  {
    id: 4,
    percentage: 10,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 3,
    colorCode: "#CEEEE2",
  },
  {
    id: 5,
    percentage: 30,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 15,
    colorCode: "#CEEEE2",
  },
  {
    id: 6,
    percentage: 100,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 30,
    colorCode: "#F9D5D5",
  },
  {
    id: 7,
    percentage: 60,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 15,
    colorCode: "#CDD5FF",
  },
  {
    id: 8,
    percentage: 10,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 3,
    colorCode: "#CEEEE2",
  },
  {
    id: 9,
    percentage: 10,
    topic: "flowering plants",
    totalScore: 30,
    averageScore: 3,
    colorCode: "#CEEEE2",
  },
];
