import React from "react";
import {render,fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("TodoList testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<TodoList />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<TodoList />)

    expect(getByTestId("todoList")).toBeInTheDocument()
})