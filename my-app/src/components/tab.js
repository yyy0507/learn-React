import React, { Component } from 'react';
import List from "./list.js";
import Content from "./content.js";


export default class Tab extends Component {
	constructor(){
		super()
		this.state = {
			list: ['标题1','标题2','标题3'],
			content: [
				{item:'内容1'},
				{item:'内容2'},
				{item:'内容3'}
			],
			current: 0
		}
	}

	handleClick = (index) => {
		this.setState({current: index});
	}

	currentClass = (index) => {
		return this.state.current === index ? 'current' : '';
	}

	contentClass = (index) => {
		return this.state.current === index ? 'active' : '';
	}
	

  	render() {
    	return (
			<div className="tab-wrapper">
				<ul id="tab">
					{ this.state.list.map((val, index) => {
						return (<List currentClass={this.currentClass} handleClick={this.handleClick} value={val} key={index} index={index} /> )
					})}
				</ul>
				<div id="content">
					{this.state.content.map((val, index) => {
						return (<Content key = {index} value = {val.item} index={index} contentClass={this.contentClass} />)
					})}
				</div>
			</div>
    );
  }
}
