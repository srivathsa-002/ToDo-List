import React from "react";
import {render,fireEvent} from "@testing-library/react";
import NavigationButtons from "./NavigationButtons";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("NavigationButtons testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<NavigationButtons />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly <NavigationButtons>", () => {
    const{getByTestId} = render(<NavigationButtons />)

    expect(getByTestId("navigationButtons")).toBeInTheDocument()
})