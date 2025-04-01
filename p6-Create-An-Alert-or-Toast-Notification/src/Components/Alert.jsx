import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = { isDismissed: false };
        this.dismissAlert = this.dismissAlert.bind(this);
    }

    dismissAlert() {
        this.setState({ isDismissed: true });
    }

    render() {
        const { children, title, type, id } = this.props;

        return this.state.isDismissed ? null : (
            <div className={`Toast Toast--${type ? type : 'info'}`}>
                <h1 id={id}>{title}</h1>
                <p>{children}</p>
                <button className="Toast__button" onClick={this.dismissAlert}>
                    <span>X</span>
                </button>
            </div>
        );
    }
}

export default Alert;
