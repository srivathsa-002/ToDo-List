import React from "react";
import { action } from '@storybook/addon-actions';
import TodoForm from "../src/components/molecule/TodoForm";
import { linkTo } from '@storybook/addon-links';


export default { title: "Todo Form", component: TodoForm };

export const todoForm = () => <TodoForm onSubmit={action('onSubmit')}/>;