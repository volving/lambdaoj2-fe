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
                <Pro name="实验十： 骰子日历"></Pro>
                <Pro name="实验九：最大子数组问题"></Pro>
                <Pro name="实验八：超定方程组的求解"></Pro>
                <Pro name="实验七：序列求和问题"></Pro>
                <Pro name="实验六：生成英文回文串"></Pro>
            </div>
        );
    }
}
