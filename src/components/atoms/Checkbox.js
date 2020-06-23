import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckBox(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    setChecked(!checked);
  };

  return (
    <div>
      <Checkbox
        data-testid="checkbox"
        checked={props.isChecked}
        onClick={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}
