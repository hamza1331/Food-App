import React, { Component } from 'react'
import { connect } from "react-redux";
import './Admin.css'
class Admin extends Component {
  componentDidMount(){
    this.props.orders.map((order,index)=>{
        order.map((o)=>{
          console.log(o.order)
        })
    })
  }
  render() {
    return (
      <div className='container table-responsive'>
        {/* {
          this.props.orders.map((o,index) => {
            <h1>Order# {index+1}</h1>
           return o.map(order=>{
            return <div>
              <h2>{order.order.name}</h2>
              <h3>Price: {order.order.price} </h3>
              <h3>Quantity: {order.quantity}</h3>
              <h3>Price of {order.quantity} items: {order.priceForNItems}</h3>
          </div>
            })
          })
        } */}
                <table style={{border:'2px ridge grey',borderRadius:'17px !important',textAlign:'center'}} 
                className='table table-hover'>
                <thead>
              <tr>
                <th>Meal</th>
                <th>Quantity</th>
                <th>Price</th>  
                <th>Sub-total</th>
            </tr>
                </thead>
                <tbody>
          {
            this.props.orders.map((o,index)=>{
              return o.map(order=>{
                return <tr>
                    <td>{order.order.name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.order.price}</td>
                    <td>{order.priceForNItems}</td>
                </tr>
              })
            })
          }
          </tbody>
           </table>
      </div>
    )
  }
}
function mapStateToProps(state){
  return({
    orders:state.rootReducer.orders
  })
}
export default connect(mapStateToProps,()=>({}))(Admin)
