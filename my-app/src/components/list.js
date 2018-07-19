import React, { Component } from 'react';


export default class List extends Component {
	constructor(props){
        super(props);
    }
    
    handleClick = () => {
    	this.props.handleClick(this.props.index)
    }
  	render() {
        const index = this.props.index;
    	return (
			<li className={this.props.currentClass(index)} onClick={this.handleClick} >{this.props.value}</li>
    );
  }
}
