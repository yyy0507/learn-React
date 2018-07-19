import React, { Component } from 'react';
import EditPanel from './editpanel.js';

export default class Note extends Component {
	constructor(props){
        super(props);
        this.state = {
            content: this.props.content,
            edit:false
        }
    }

    handleEdit = (e) => {
        e.preventDefault;
        this.setState ({
            edit: true
        })
    }

    handleDelete = (e) => {
        e.preventDefault();
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    //处理子函数传回来的state。改变自身的state
    handleChildChange = (newState) => {
        if(newState) {
            this.setState(newState);
            this.setState({
                edit: false
            })
        }
    } 

  	render() {
    	return (
            <div>
    			<div className = "note-item">
                    <p>{this.state.content}</p>
                    <a href = "#" onClick = {this.handleEdit}>编辑</a>
                    <a href = "#" onClick = {this.handleDelete}>删除</a>
                </div>
                <EditPanel item = {this.state} onChange = {this.handleChildChange} />
            </div>
    )
  }
}
