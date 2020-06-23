import React from "react";
import {render,fireEvent} from "@testing-library/react";
import UpdateIcon from "./UpdateIcon";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("UpdateIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<UpdateIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<UpdateIcon />)

    expect(getByTestId("update")).toBeTruthy()
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
