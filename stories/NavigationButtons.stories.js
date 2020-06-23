import React from "react";
import { action } from '@storybook/addon-actions';
import NavigationButtons from "../src/components/molecule/NavigationButtons";

export default { title: "Navigation Buttons", component: NavigationButtons };

export const nav = () => <NavigationButtons badgeContent={action('badgeContent')} all={action('all')} active={action('active')} complete={action('complete')}/>;