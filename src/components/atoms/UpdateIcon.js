import React from 'react';
import { Tooltip, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default class UpdateIcon extends React.Component {
    render() {
        return (
            <Tooltip data-testid="update" onClick={this.props.click} title="Update Todo" placement={this.props.placement} arrow>
                <div>
                    <IconButton>
                        <ArrowUpwardIcon />
                    </IconButton>
                </div>
            </Tooltip>
        );
    }
}