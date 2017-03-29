import React from 'react';
import {IndexLink} from 'react-router';
export default class OnlineJudge extends React.Component {
    render() {
        var activeStyle = {
            fontWeight: 'bold'
        };
        return (
            <div>
                <ul className="menu">
                    <li>
                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj">Problems</IndexLink>
                    </li>
                    <li>
                        <IndexLink activeClassName="active" activeStyle={activeStyle} to="oj/submits">Submit</IndexLink>
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
                {this.props.children}
            </div>
        );
    }
}
