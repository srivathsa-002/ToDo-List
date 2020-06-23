import React from 'react';
import { action } from '@storybook/addon-actions';
import App from "../src/App";

export default {
  title: 'Test',
};

export const test = () => <textarea onClick={action('clicked')}>Storybook TextArea</textarea>;
