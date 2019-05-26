import React, { Component } from 'react'
import OrderItem from '../OrderItem'
import orderList from '../../mock/order'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: orderList.data })
    // console.log(orderList)
  }

  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map((item, index) => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true
          }
        : item
    })
    this.setState({
      data:newData
    })
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) => {
          return (
            <OrderItem key={index} data={item} onSubmit={this.handleSubmit} />
          )
        })}
        {/* <OrderItem data={this.state.data[0]} /> */}
        {/* orderlist */}
      </div>
    )
  }
}

export default OrderList
