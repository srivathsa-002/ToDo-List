import React from 'react';

export default class UpdateInputBox extends React.Component {
    handleChange = () => {
        var newVal = this.input.value;
        this.props.onNewVal(newVal);
    } 
    render() {
        return (
            <input
                type="text"
                ref={(val) => {
                    this.input = val
                }}
                defaultValue={this.props.defaultValue}
                style={{ flexGrow: "1", borderRadius: "5px", marginRight: "1.2rem" }}
                onSubmit={this.handleChange}
            />
        );
    }
}