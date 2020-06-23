import React from "react";
import {render,fireEvent} from "@testing-library/react";
import Checkbox from "./Checkbox";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import {create} from "react-test-renderer";

describe("Checkbox testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<Checkbox />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<Checkbox />)

    expect(getByTestId("checkbox")).toBeTruthy()
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
