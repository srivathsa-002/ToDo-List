import React from "react";
import { action } from '@storybook/addon-actions';
import CompleteIcon from "../src/components/atoms/CompleteIcon";

export default { title: "Complete Icon", component: CompleteIcon };

export const complete = () => <CompleteIcon onClick={action('clicked')}/>;