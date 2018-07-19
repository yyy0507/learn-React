import React, { Component } from 'react';

export default class List extends Component {
	constructor(props){
        super(props)
        this.state = {
            val: '',
            arr: []
        }
    }

    

    handleData = (e) => {
        this.setState({
            val : e.target.value
        })
    }

    handleClick = () => {
        var val = this.state.val
        this.setState({
            arr: [val, ...this.state.arr]
        })
    }

  	render() {
        var arr1 = this.state.arr;
    	return (
			<div>
                <input onChange = {this.handleData}/>
                <button onClick = {this.handleClick}>点击保存</button>
                {arr1.map((i,index) => (
                    <div key={index}>{i}</div>
                ))}
            </div>
    );
  }
}
