import React, { Component } from 'react';
import TableItem from './tableItem.js';
import AddItem from './addItem.js';

export default class SearchHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            busInfo: [{
                id: 0,
                name: "101",
                startTime: "06:30",
                interval: "30",
                hlg: "3",
                zgc: "5",
                totalTime: "5",
                status: 0
            },{   
                id: 1,
                name: "102",
                startTime: "06:00",
                interval: "10",
                hlg: "5",
                zgc: "8",
                totalTime: "3",
                status: 0
            }],
            edit: false,
            optimalLine: {}
        };
    }

    //添加线路
    addLine = (newitem) => {
        let allLine = this.state.busInfo;
        allLine.push(newitem);
        this.setState({
            busInfo: allLine
        });
    }

    //更新线路
    updateTotal = (todoItem) => {
        let obj = [];
        this.state.busInfo.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
            }
        });
        this.setState({
            busInfo: obj
        });
        // console.log(this.state.busInfo);
    }
    
    //编辑线路
    editBusInfo = (e) => {
        const busInfo = this.state.busInfo.slice();
        // console.log(this.state.busInfo);
        this.state.busInfo.forEach((item, i) => {
            if (item.id == e.id) {
                // obj.push(e);
                console.log(e);
                busInfo[i] = e;
                // console.log(busInfo[i]);
            }
        });
        this.setState({
            busInfo
        });
        // console.log(busInfo);
    }

    //计算到达时间
    getArrTime = () => {
        let time = this.refs.time.value,
            // status = this.state,
            data = this.state.busInfo;
            console.log("测试"+ data.totalTime);
        let arrTime,
            result = [];

        for (let i = 0; i < data.length; i++) {
            let id = data[i].id;
            let busStartTime = parseInt(((data[i].startTime.split(':')[0]) * 60), 10) + parseInt((data[i].startTime.split(':')[1]), 10),
                leaveTime = parseInt((time.split(':')[0] * 60), 10) + parseInt((time.split(':')[1]), 10);

            if (leaveTime <= busStartTime) {
                arrTime = parseInt((busStartTime - leaveTime), 10) + data[i].zgc * data[i].totalTime;
                result.push({id: id, totaltime: arrTime});
                
            } else {
                let waiteTime = (leaveTime - busStartTime) % parseInt((data[i].interval), 10);
                let busArrivalTime = data[i].zgc * data[i].totalTime;
                if (waiteTime === 0) {
                    let arrTime = waiteTime + busArrivalTime;
                    result.push({id: id, totaltime: arrTime});
                }else {
                    waiteTime = data[i].interval - waiteTime;
                    let arrTime = waiteTime + busArrivalTime;
                    result.push({id: id, totaltime: arrTime});
                }   
            }
        }
        console.log(result);
        let min = result[0].totaltime,
            minId = result[0].id,
            optimalLine = {
                name: '',
                time: ''
            }

        for (let i = 0; i < result.length; i++) {
            if (result[i].totaltime < min) {
                min = result[i].totaltime;
                minId = result[i].id;
            }
        }

        optimalLine.time = min;

        for (var i in data) {
            if (data[i].id === minId) {
                optimalLine.name = data[i].name;
            }
        }
        return optimalLine;
    }

    //显示最优的路线
    showOptimalLine = (e) => {
        e.preventDefault();
        let time = this.refs.time.value;
        if (!time) {
            alert('请输入出发时间！');
        } else {
            let optimalLine = this.getArrTime();
            console.log(optimalLine);
            this.setState({
                optimalLine: optimalLine
            });
        }
    }

    render() {
    	return (
			<div>
                <table className="mp-table">
                    <thead>
                        <tr>
                            <th>公交线路</th>
                            <th>开始运营时间</th>
                            <th>公交车发车间隔</th>
                            <th>始发站距离回龙观站数</th>
                            <th>始发站距离中关村站数</th>
                            <th>每站用时</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.busInfo.map((item, index) =>
                            <TableItem item={item} key={index} totalChange={this.updateTotal} editBusInfo={this.editBusInfo} />
                        )}
                    </tbody>
                </table>
                <AddItem addNewLine={this.addLine} nums={this.state.busInfo.length} data={this.state.busInfo} />
                <div>
                    小明计划上车时间: <input type="text" ref="time" />
                    <div className="mp-add">
                        <input type="button" value="查询" onClick = {this.showOptimalLine}/>
                    </div>
                    <div>最优路线为: {this.state.optimalLine.name}</div>
                </div>
            </div>
        );
    }
}
