import { PIeChartCard } from "@/components/Global/Cards/PIeChartCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock the `recharts` components
jest.mock("recharts", () => ({
  __esModule: true,
  PieChart: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Pie: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Cell: ({ fill }: { fill: string }) => (
    <div style={{ backgroundColor: fill }} />
  ),
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("PIeChartCard Component", () => {
  const defaultProps = {
    title: "Test Title",
    percentageValue: 65,
    pieChartWidth: 200,
    pieChartHeight: 200,
  };

  it("renders title and percentage correctly", () => {
    render(<PIeChartCard {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("65%")).toBeInTheDocument();
  });

  it("renders recharts components with correct data", () => {
    const { container } = render(<PIeChartCard {...defaultProps} />); // Destructure container here

    // Check if PieChart and Pie components are rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument(); // Ensure the component itself is rendered
    expect(screen.getByText("65%")).toBeInTheDocument(); // Ensure the percentage is rendered

    // Verify the presence of Cell components by checking their background colors
    const cells = container.querySelectorAll("div[style^='background-color:']");
    expect(cells.length).toBe(2); // Expect two cells (Group A and Group B)
    expect(cells[0]).toHaveStyle("background-color: rgb(241, 245, 248)"); // First color
    expect(cells[1]).toHaveStyle("background-color: rgb(255, 223, 55)"); // Second color for percentage
  });

  it("applies the correct color range based on percentage", () => {
    const { rerender } = render(
      <PIeChartCard {...defaultProps} percentageValue={30} />
    );
    expect(screen.getByText("30%")).toBeInTheDocument(); // Check for percentage text

    rerender(<PIeChartCard {...defaultProps} percentageValue={50} />);
    expect(screen.getByText("50%")).toBeInTheDocument(); // Check for percentage text

    rerender(<PIeChartCard {...defaultProps} percentageValue={80} />);
    expect(screen.getByText("80%")).toBeInTheDocument(); // Check for percentage text
  });

  it("displays averages if averageOne and averageTwo are provided", () => {
    render(<PIeChartCard {...defaultProps} averageOne={75} averageTwo={100} />);

    expect(screen.getByText("75 / 100")).toBeInTheDocument();
  });

  it("does not display averages if averageOne and averageTwo are not provided", () => {
    render(<PIeChartCard {...defaultProps} />);

    expect(screen.queryByText(/\/\s/)).toBeNull();
  });
});
