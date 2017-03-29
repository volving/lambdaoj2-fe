import React from 'react';
class Pro extends React.Component {
    render(){
        return (
            <div className="problemItem">{this.props.name}</div>
        );
    }
}
export default class Problems extends React.Component {
    render() {
        return (
            <div>
                <h1>Problems</h1>
                <Pro name="Alpha"></Pro>
                <Pro name="Beta"></Pro>
                <Pro name="Gamma"></Pro>
                <Pro name="Epsilon"></Pro>
                <Pro name="Pi"></Pro>
            </div>
        );
    }
}
