import React from "react";
import { action } from '@storybook/addon-actions';
import AddTaskIcon from "../src/components/atoms/AddTaskIcon";

export default { title: "AddTask Icon", component: AddTaskIcon };

export const addTask = () => <AddTaskIcon onClick={action('clicked')}/>;