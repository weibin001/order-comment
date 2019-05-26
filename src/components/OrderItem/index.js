import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      comment: props.data.comment || '',
      stars: props.data.stars || 0
    }
  }
  //评价按钮
  renderButton() {
    const { ifCommented } = this.props.data
    if (ifCommented) {
      return (
        <button className="orderItem__btn orderItem__btn--grey">已评价</button>
      )
    } else {
      return (
        <button
          className="orderItem__btn orderItem__btn--red"
          onClick={this.handleOpenEditArea}
        >
          评价
        </button>
      )
    }
  }
  //评价文本框
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="orderItem__comment"
        />
        {this.renderStars()}
        <button
          className="orderItem__btn orderItem__btn--red"
          onClick={() => this.handleSubmitComment()}
        >
          提交
        </button>
        <button
          className="orderItem__btn orderItem__btn--grey"
          onClick={() => this.handleCancelComment()}
        >
          取消
        </button>
      </div>
    )
  }

  //rate
  renderStars() {
    const { stars } = this.state
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = stars >= item ? 'orderItem__star--light' : ''
          return (
            <span
              className={'orderItem__star ' + lightClass}
              key={index}
              onClick={() => this.handleClickStars(item)}
            >
              ♥
            </span>
          )
        })}
      </div>
    )
  }
  //显示评价框
  handleOpenEditArea = () => {
    this.setState({
      editing: !this.state.editing
    })
  }
  //双向绑定文本框 等于Vue v-model的语法糖
  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    })
  }
  //评分
  handleClickStars = item => {
    //console.log(item)
    this.setState({
      stars: item
    })
  }
  //取消
  handleCancelComment = () => {
    this.setState({
      editing: false,
      comment: this.props.data.comment || '',
      stars: this.props.data.stars || 0
    })
  }
  //提交
  handleSubmitComment = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editing: false
    })
    this.props.onSubmit(id, comment, stars)
  }

  render() {
    const { shop, picture, product, price } = this.props.data
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img src={picture} className="orderItem__pic" alt="产品图片" />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{shop}</div>
          <div className="orderItem__shop">{product}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            <div>{this.renderButton()}</div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    )
  }
}

export default OrderItem
