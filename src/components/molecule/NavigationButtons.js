import React from 'react';
import { Badge } from "@material-ui/core";
import AllIcon from "../atoms/AllIcon";
import ActiveIcon from "../atoms/ActiveIcon";
import CompleteIcon from "../atoms/CompleteIcon";
import "../../styles/components/container.css";

export default class NavigationButtons extends React.Component {
    render() {
        return (
            <div className="button-container" data-testid="navigationButtons">
                <div className="three-buttons">
                    <div className="hoverable1" onClick={this.props.all} val="All">
                        <AllIcon />
                        {" "}All
                </div>
                    <hr />
                    <div className="hoverable2" onClick={this.props.active} val="Active">
                        <ActiveIcon />
                        <Badge badgeContent={this.props.badgeContent} color="primary">
                            {" "}Active
                  </Badge>
                    </div>
                    <hr />
                    <div className="hoverable3" onClick={this.props.complete} val="Complete">
                        <CompleteIcon />
                        {" "}Completed
                  </div>
                </div>
            </div>
        );
    }
}