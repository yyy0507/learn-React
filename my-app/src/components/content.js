import React, { Component } from 'react';


export default class Content extends Component {
	constructor(props){
        super(props);
    }

    handleClick = () =>{
    	this.props.handleClick(this.props.index)
    }

  	render() {
    	return (
			<div className={this.props.contentClass(this.props.index)}>{this.props.value}</div>
    );
  }
}
