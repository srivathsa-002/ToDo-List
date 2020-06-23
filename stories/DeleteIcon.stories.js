import React from "react";
import { action } from '@storybook/addon-actions';
import DeleteIcon from "../src/components/atoms/DeleteIcon";

export default { title: "Delete Icon", component: DeleteIcon };

export const deleteIcon = () => <DeleteIcon onClick={action('clicked')}/>;