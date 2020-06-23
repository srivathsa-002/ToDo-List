import React from "react";
import { action } from '@storybook/addon-actions';
import EditIcon from "../src/components/atoms/EditIcon";

export default { title: "Edit Icon", component: EditIcon };

export const edit = () => <EditIcon onClick={action('click')}/>;