import React from "react";
import { action } from '@storybook/addon-actions';
import UpdateIcon from "../src/components/atoms/UpdateIcon";

export default { title: "Update Icon", component: UpdateIcon };

export const update = () => <UpdateIcon onClick={action('clicked')}/>;