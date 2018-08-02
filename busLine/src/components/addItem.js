import React, { Component } from 'react';

export default class AddItem extends Component {
    constructor(props){
        super(props);
    }

    //添加线路
    handleClick = () => {
        let len = this.props.nums;
        let newId = len > 0 ? len : 0,
            newName = this.refs.name.value, //添加的线路名称
            newTime = this.refs.startTime.value, //开始运营时间
            newInterval = this.refs.interval.value, //公交发车时间间隔
            newhlg = this.refs.hlg.value, //始发站距离回龙观站数
            newzgc = this.refs.zgc.value, //始发站距离中关村站数
            newTotalTime = this.refs.totalTime.value; //每站用时

        let busInfo = {
            id: newId,
            name: newName,
            startTime: newTime,
            interval: newInterval,
            hlg: newhlg,
            zgc: newzgc,
            totalTime: newTotalTime
        }

        let data = this.props.data,
            originalData = data.slice(),
            isExist = false; // 判断线路是不是存在

        if (!busInfo.name) {
            alert("请输入公交线路信息");
        } else if (busInfo.name) {
            for (let i = 0; i < originalData.length; i++) {
                if (originalData[i].name === busInfo.name) {
                    isExist = true;
                    alert("线路已存在");
                }
            }
            if (!isExist){
                this.props.addNewLine(busInfo);
            } 
        } 
    }
   
    render() {
    	return (
            <div className="mp-addWrapper">
                <h2>添加线路</h2>
                公交线路名称: <input type="text" ref="name" />
                开始运营时间: <input type="text" ref="startTime" />
                公交车发车间隔: <input type="text" ref="interval" />
                <br />
                <br />
                始发站距离回龙观站数: <input type="text" ref="hlg" />
                始发站距离中关村站数: <input type="text" ref="zgc" />
                每站用时: <input type="text" ref="totalTime" />
                <div className="mp-add">
                    <input type="button" value="添加" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}
