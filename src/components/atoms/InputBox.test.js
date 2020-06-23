import React from "react";
import {render,fireEvent} from "@testing-library/react";
import InputBox from "./InputBox";
import "@testing-library/jest-dom/extend-expect";
import {create} from "react-test-renderer";

describe("InputBox testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<InputBox />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId, queryByPlaceholderText} = render(<InputBox />)

    expect(getByTestId("input-field")).toBeTruthy()
    expect(queryByPlaceholderText("Todo...")).toBeTruthy()
})

describe("Input value", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<InputBox />)
        const inputBox = queryByPlaceholderText("Todo...")
        fireEvent.change(inputBox, {target: {value: "test"}})
        expect(inputBox.value).toBe("test")
    })
})
