import React from "react";
// import { action } from '@storybook/addon-actions';
import TodoList from "../src/components/organism/TodoList";

export default { title: "Todo List", component: TodoList };

export const todoList = () => <TodoList />;