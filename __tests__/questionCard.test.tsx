import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IQuestion, questions } from "@/base/dummyData/questions"; // Adjust the import path as necessary
import { QuestionCard } from "@/components/Global/Cards/QuestionCard";

// Mock question data
const mockQuestion: IQuestion = questions[1];

describe("QuestionCard Component", () => {
  it("renders the question text and options", () => {
    render(<QuestionCard question={mockQuestion} />);

    // Check if the question text is rendered
    const questionText = screen.getByText(mockQuestion.question);
    expect(questionText).toBeInTheDocument();

    // Check if all options are rendered
    mockQuestion.options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("renders the image if provided", () => {
    render(<QuestionCard question={mockQuestion} />);
    
    // Check if the image wrapper is rendered using data-testid
    const imageWrapper = screen.getByTestId("question-image-wrapper");
    expect(imageWrapper).toBeInTheDocument();

    const image = imageWrapper.querySelector("img"); // Check for the img tag inside the wrapper
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("/_next"));
  });

  it("does not render the image when imageUrl is not provided", () => {
    // Mock question without an image
    const mockQuestionWithoutImage = {
      ...mockQuestion,
      imageUrl: "", // No image URL
    };

    render(<QuestionCard question={mockQuestionWithoutImage} />);

    const imageWrapper = screen.queryByTestId("question-image-wrapper");
    expect(imageWrapper).not.toBeInTheDocument(); // Image wrapper should not be in the document
  });

  it("handles radio button selection", () => {
    render(<QuestionCard question={mockQuestion} />);

    const options = screen.getAllByRole("radio");

    // Initially, no radio buttons should be checked
    expect(options[0]).not.toBeChecked();
    expect(options[1]).not.toBeChecked();

    // Select the first option
    fireEvent.click(options[0]);
    expect(options[0]).toBeChecked();
    expect(options[1]).not.toBeChecked();

    // Select the second option
    fireEvent.click(options[1]);
    expect(options[1]).toBeChecked();
    expect(options[0]).not.toBeChecked();
  });
});
