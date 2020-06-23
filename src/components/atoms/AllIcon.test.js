import React from "react";
import {render,fireEvent} from "@testing-library/react";
import AllIcon from "./AllIcon";
// import { faItalic } from "@fortawesome/free-solid-svg-icons";
import {create} from "react-test-renderer";

describe("AllIcon testing", () => {
    test("Matches the snapshot", () => {
      const input = create(<AllIcon />);
      expect(input.toJSON()).toMatchSnapshot();
    });
});

it("renders correctly", () => {
    const{getByTestId} = render(<AllIcon />)

    expect(getByTestId("all")).toBeTruthy()
    // expect(queryByPlaceholderText("Todo...")).toBeTruthy()
})