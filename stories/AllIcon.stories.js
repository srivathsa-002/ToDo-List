import React from "react";
import { action } from '@storybook/addon-actions';
import AllIcon from "../src/components/atoms/AllIcon";

export default { title: "All Icon", component: AllIcon };

export const all = () => <AllIcon onClick={action('clicked')}/>;