import React from "react";
import {render,fireEvent} from "@testing-library/react";
import AddTaskIcon from "./AddTaskIcon";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import {create} from "react-test-renderer";

describe("AddTaskIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<AddTaskIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<AddTaskIcon />)

    expect(getByTestId("addTask")).toBeTruthy()
    // expect(queryByPlaceholderText("Todo...")).toBeTruthy()
})