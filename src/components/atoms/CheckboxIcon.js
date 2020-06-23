import React from 'react';
import { Tooltip, IconButton } from "@material-ui/core";
import CheckBox from "./Checkbox";

export default class CheckboxIcon extends React.Component {
    render() {
        return (
            <Tooltip title="Mark as Complete" onClick={this.props.click} placement={this.props.placement} arrow>
                <div>
                    <IconButton>
                        <CheckBox data-testid="checkbox" isChecked={this.props.checked} />
                    </IconButton>
                </div>
            </Tooltip>
        );
    }
}