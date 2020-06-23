import React from "react";
import { action } from '@storybook/addon-actions';
import ActiveIcon from "../src/components/atoms/ActiveIcon";

export default { title: "Active Icon", component: ActiveIcon };

export const active = () => <ActiveIcon onClick={action('clicked')}/>;