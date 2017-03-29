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
                        <ul className="dropdown menu" data-dropdown-menu id={this.props.componentId || 'nav'}>
                            <li>
                                <IndexLink activeClassName="active" activeStyle={activeStyle} to="/">Home</IndexLink>
                            </li>
                            <li>
                                <IndexLink activeClassName="active" activeStyle={activeStyle} to="/oj">Online Judge</IndexLink>
                                <ul className="menu">
                                    <li>
                                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj">Problems</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj/submit">Submit</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj/status">Status</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj/profile">Profile</IndexLink>
                                    </li>
                                    <li>
                                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="/logout">Logout</IndexLink>
                                    </li>
                                </ul>
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
