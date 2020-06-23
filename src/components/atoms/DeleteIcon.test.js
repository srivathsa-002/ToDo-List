import React from "react";
import {render,fireEvent} from "@testing-library/react";
import DeleteIcon from "./DeleteIcon";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import {create} from "react-test-renderer";

describe("DeleteIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<DeleteIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<DeleteIcon />)

    expect(getByTestId("delete")).toBeTruthy()
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
