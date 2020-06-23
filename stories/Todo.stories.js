import React from "react";
import { action } from '@storybook/addon-actions';
import Todo from "../src/components/molecule/Todo";

export default { 
    title: "Todo", 
    component: Todo,
    excludeStories: /.*Data$/,
};

export const actionsData = {
    toggleComplete: action('toggleComplete'),
    onDelete: action('onDelete'),
    editTodo: action('editTodo'),
};

export const todo = () => {
    const todo = { text: "Go To Jog" };
    return(
        <Todo todo={todo} {...actionsData}/>
    );
};