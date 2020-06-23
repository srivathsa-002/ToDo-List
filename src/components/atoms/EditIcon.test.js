import React from "react";
import {render,fireEvent} from "@testing-library/react";
import EditIcon from "./EditIcon";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("EditIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<EditIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<EditIcon />)

    expect(getByTestId("edit")).toBeInTheDocument()
    // expect(queryByPlaceholderText("Todo...")).toBeTruthy()
})

// describe("Input value", () => {
//     it("updates on change", () => {
//         const {queryByPlaceholderText} = render(<InputBox />)
//         const inputBox = queryByPlaceholderText("Todo...")
//         fireEvent.change(inputBox, {target: {value: "test"}})
//         expect(inputBox.value).toBe("test")
//     })
// })
