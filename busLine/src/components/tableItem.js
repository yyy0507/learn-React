import React, { Component } from 'react';

export default class TableItem extends Component {
    constructor(){
        super();
        this.state = {
            edit: false
        }
    }

    //删除线路信息
    handleDelete = () => {
        this.props.totalChange(this.props.item);
    }

    //编辑线路信息
    handleEdit = (e) => {
        let newName = this.refs.name.value,
            newTime = this.refs.startTime.value,
            newInterval = this.refs.interval.value,
            newhlg = this.refs.hlg.value,
            newzgc = this.refs.zgc.value,
            newTotalTime = this.refs.totalTime.value;
            
        let busInfo = {
            id: this.props.item.id,
            name: newName,
            startTime: newTime,
            interval: newInterval,
            hlg: newhlg,
            zgc: newzgc,
            totalTime: newTotalTime
        }
        // console.log(this.props.item.id);
        this.props.editBusInfo(busInfo);
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        const item = this.props.item,
            edit = this.state.edit;
    	return (
            <tr className="mp-item">
                <td><input type = "text" ref = "name" defaultValue = {item.name} readOnly = { edit ? false : true} /></td>
                <td><input type = "text" ref = "startTime" defaultValue = {item.startTime} readOnly = { edit ? false : true} /></td>
                <td><input type = "text" ref = "interval" defaultValue = {item.interval} readOnly = { edit ? false : true} /></td>
                <td><input type = "text" ref = "hlg" defaultValue = {item.hlg} readOnly = { edit ? false : true} /></td>
                <td><input type = "text" ref = "zgc" defaultValue = {item.zgc} readOnly = { edit ? false : true} /></td>
                <td><input type = "text" ref = "totalTime" defaultValue = {item.totalTime} readOnly = { edit ? false : true} /></td>
                <td>
                    <span className="mp-btn mp-edit" onClick={this.handleEdit}>{ edit ? "确定" : "编辑"}</span>
                    <span className="mp-btn mp-del" onClick={this.handleDelete}>删除</span>
                </td>
            </tr>
        );
    }
}
