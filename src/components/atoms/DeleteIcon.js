import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Tooltip, IconButton } from "@material-ui/core";

export default class DeleteIcon extends React.Component {
    render() {
        return (
            <Tooltip data-testid="delete" onClick={this.props.click} title="Delete Todo" placement={this.props.placement} arrow>
                <div>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </div>
            </Tooltip>
        );
    }
}