import React from 'react';
import "../../styles/components/widget.css";

export default class FormLabel extends React.Component {
    render() {
        return (
            <form
              className="widget-header"
              onSubmit={this.props.onSubmit}
            />
        );
    }
}