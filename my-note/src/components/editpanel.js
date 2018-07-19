import React, { Component } from 'react';

export default class EditPanel extends Component {
	constructor(props){
        super(props);
        this.state = this.props.item;
    }

    handleEditFinish = (e) => {
        var newState = {
            content: e.target.previousSibling.value
        }
        this.props.onChange(newState);
    }

  	render() {
    	return (
			<div className = "edit-panel" style = {{display: this.props.item.edit ? "block" : "none"}}>
                <textarea cols = "30" rows = "10" />
                <div href = "#" onClick = {this.handleEditFinish}> 完成 </div>
            </div>
    );
  }
}
