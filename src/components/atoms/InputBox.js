import React from 'react';
import "../../styles/components/widget.css";

export default class InputBox extends React.Component {
    render() {
        return (
            <input
              data-testid="input-field"
              className="widget-header-input"
              name="text"
              value={this.props.value}
              onChange={this.props.onChange}
              placeholder="Todo..."
            />
        );
    }
}