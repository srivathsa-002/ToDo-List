import React from "react";

export default class Para extends React.Component {
    render() {
        return (
            <p style={{ margin: "0" }}>{this.props.val}</p>
        );
    }
}