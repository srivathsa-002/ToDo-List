import React from "react";
import {render,fireEvent} from "@testing-library/react";
import TodoForm from "./TodoForm";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("TodoForm testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<TodoForm />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<TodoForm />)

    expect(getByTestId("form")).toBeInTheDocument()
})