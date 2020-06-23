import React from "react";
import {render,fireEvent} from "@testing-library/react";
import ActiveIcon from "./ActiveIcon";
import {create} from "react-test-renderer";

describe("ActiveIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<ActiveIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<ActiveIcon />)

    expect(getByTestId("active")).toBeTruthy()
    // expect(queryByPlaceholderText("Todo...")).toBeTruthy()
})
