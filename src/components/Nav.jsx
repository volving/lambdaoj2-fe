import React from 'react';
import {IndexLink} from 'react-router';

export default class Nav extends React.Component {
    render() {
        var activeStyle = {
            fontWeight: 'bold'
        };
        return (
            <div className="top-bar">
                <div className="row">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">Lambda OJ v2</li>
                        </ul>
                    </div>

                    <div className="top-bar-right">
                        <ul className="menu" id={this.props.componentId || 'nav'}>
                            <li>
                                <IndexLink activeClassName="active" activeStyle={activeStyle} to="/">Home</IndexLink>
                            </li>
                            <li>
                                <IndexLink activeClassName="active" activeStyle={activeStyle} to="/oj">Online Judge</IndexLink>
                            </li>
                            <li>
                                <IndexLink activeClassName="active" activeStyle={activeStyle} to="/login">Login</IndexLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
