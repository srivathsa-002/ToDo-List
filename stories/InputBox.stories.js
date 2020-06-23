// import React from "react";
// import {storiesOf} from "@storybook/react";
// import InputBox from "../src/components/atoms/InputBox";

// const defaultProps = {
//     value: '',
//     setInputValue: () => {} 
// };

// const populateProps = {
//     value: 'Learn React',
//     setInputValue: () => {} 
// };


// storiesOf("InputBox", module)
//     .add("default", () =><InputBox {...defaultProps}/>)
//     .add("populated", () => <InputBox {...populateProps} />);

import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import InputBox from "../src/components/atoms/InputBox";

export default { title: "Input box", decorators: [withKnobs] };

export const field = () => {
    const placeHolder = text("placeHolder", "Todo...");
    return <InputBox placeHolder={placeHolder} style={{ width: "70%", margin: "40px auto" }}></InputBox>;
};