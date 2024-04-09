import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../Screens/HomeScreen";

describe("<HomeScreen />", () => {
  it("renders search input", () => {
    const { getByPlaceholderText } = render(<HomeScreen />);
    const searchInput = getByPlaceholderText("Search");
    expect(searchInput).toBeDefined();
  });

  it("renders search button", () => {
    const { getByText } = render(<HomeScreen />);
    const searchButton = getByText("Search");
    expect(searchButton).toBeDefined();
  });

  it("updates component state when user enters text into search input", () => {
    const { getByPlaceholderText } = render(<HomeScreen />);
    const searchInput = getByPlaceholderText("Search");

    fireEvent.changeText(searchInput, "Test Search");

    const updatedSearchInquiry = searchInput.props.value;
    expect(updatedSearchInquiry).toBe("Test Search");
  });

  it("updates searchInquiry state on typing", () => {
    const { getByPlaceholderText } = render(<HomeScreen />);
    const searchInput = getByPlaceholderText("Search");
    fireEvent.changeText(searchInput, "test");
    expect(searchInput.props.value).toBe("test");
  });

  it("displays matching recipes when searched", () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    const searchInput = getByPlaceholderText("Search");
    const searchButton = getByText("Search");
    fireEvent.changeText(searchInput, "Pasta");
    fireEvent.press(searchButton);
    const recipeName = getByText("Pesto Pasta"); //
    expect(recipeName).toBeDefined();
  });
});
