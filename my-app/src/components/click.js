import React, { Component } from 'react';

export default class LikeButton extends Component {
  constructor () {
    super()
    this.state = { 
      isLiked: false,
      count: 0
    }
  }

  handleClickOnLikeButton =()=> {
    console.log(this.state.isLiked)
    this.setState({
      isLiked: !this.state.isLiked
    })
    console.log(this.state.isLiked)
  }

  // handleClickOnLikeButton = () => {
  //   this.setState((prevState) => {
  //     return { count: 0 }
  //   })
  //   console.log(this.state.count)
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
  //   })
  //   console.log(this.state.count)
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
  //   })
  //   console.log(this.state.count)
  //   // 最后的结果是 this.state.count 为 3
  // }

  render () {
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'
    return (
      <div>
       
        <button onClick={this.handleClickOnLikeButton}>{this.state.isLiked ? likedText : unlikedText}</button>
      </div>
    )
  }
}
