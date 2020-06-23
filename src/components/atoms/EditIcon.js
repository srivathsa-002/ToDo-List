import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Tooltip, IconButton } from "@material-ui/core";

export default class EditIcon extends React.Component {
    render() {
        return (
            <Tooltip data-testid="edit" onClick={this.props.click} title="Edit ToDo" placement={this.props.placement} arrow>
                <div>
                    <IconButton>
                        <CreateOutlinedIcon />
                    </IconButton>
                </div>
            </Tooltip>
        );
    }
}