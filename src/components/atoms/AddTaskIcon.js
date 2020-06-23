import React from 'react';
import { Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


export default class AddTaskIcon extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item>
                    <AddIcon data-testid="addTask"/>
                    {"   "}
                </Grid>

                <Grid item style={{ paddingTop: "1px", paddingLeft: "5px" }}>
                    <span style={{ paddingLeft: "5px" }}>Add task</span>
                </Grid>
            </Grid>
        );
    }
}