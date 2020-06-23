import React from "react";
import {render,fireEvent} from "@testing-library/react";
import CheckboxIcon from "./CheckboxIcon";
import {create} from "react-test-renderer";

describe("CheckboxIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<CheckboxIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<CheckboxIcon />)

    expect(getByTestId("checkbox")).toBeTruthy()
})