import React from "react";
import {render,fireEvent} from "@testing-library/react";
import Todo from "./Todo";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("Todo testing", () => {
    test("Matches the snapshot", () => {
      const todo="Go to Job";
      const input = create(<Todo todo={todo}/>);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly <Todo>", () => {
    const todo = "Go to Job";
    const{getByTestId} = render(<Todo todo={todo}/>)

    expect(getByTestId("todo")).toBeInTheDocument()
})