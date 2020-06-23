import React from 'react';
import Checkbox from '../src/components/atoms/Checkbox';

export default { title: 'Checkbox' };

export const unchecked = () => <Checkbox isChecked={false} ></Checkbox>;
export const checked = () => <Checkbox isChecked={true}> </Checkbox>;