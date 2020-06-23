import React from "react";
import {render,fireEvent} from "@testing-library/react";
import CompleteIcon from "./CompleteIcon";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import {create} from "react-test-renderer";

describe("CompleteIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<CompleteIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<CompleteIcon />)

    expect(getByTestId("complete")).toBeTruthy()
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
