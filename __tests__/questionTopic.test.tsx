
import { QuestionTopic } from "@/components/Pages/StatisticsPage/QuestionTopic";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("QuestionTopic Component", () => {
  const defaultProps = {
    color: "#FF5733", // Example color
    percentageValue: 75,
    totalScore: 100,
    averageScore: 80,
  };

  it("renders correctly with given props", () => {
    render(<QuestionTopic {...defaultProps} />);

    // Check for the percentage text
    expect(screen.getByText("75%")).toBeInTheDocument();

    // Check for the average score text
    expect(screen.getByText("80 / 100")).toBeInTheDocument();

    // Check for the topic name
    expect(screen.getByText("flowering plants")).toBeInTheDocument();

    // Check for the bar element and its styles using the data-testid
    const barElement = screen.getByTestId("percentage-bar");
    expect(barElement).toHaveStyle(`width: 75%`);
    expect(barElement).toHaveStyle(`background-color: ${defaultProps.color}`);
  });

  it("applies the correct styles based on percentageValue", () => {
    render(<QuestionTopic {...defaultProps} percentageValue={50} />);

    const barElement = screen.getByTestId("percentage-bar");
    expect(barElement).toHaveStyle(`width: 50%`);
  });

  it("renders with different color and values", () => {
    const newProps = {
      ...defaultProps,
      color: "#28a745", // A different color
      percentageValue: 20,
      totalScore: 200,
      averageScore: 40,
    };

    render(<QuestionTopic {...newProps} />);

    expect(screen.getByText("20%")).toBeInTheDocument();
    expect(screen.getByText("40 / 200")).toBeInTheDocument();
    const barElement = screen.getByTestId("percentage-bar");
    expect(barElement).toHaveStyle(`width: 20%`);
    expect(barElement).toHaveStyle(`background-color: ${newProps.color}`);
  });
});
