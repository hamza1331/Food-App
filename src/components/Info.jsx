import React, { Component } from 'react'
import { connect } from "react-redux";
import './Info.css'
import Modal from 'react-responsive-modal'
import { addInfo } from '../store/actions/actions'
class Info extends Component {
  componentDidMount() {
    this.refs.name.focus()
    console.log(this.props.order)
  }
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone: '',
      open: false
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  onCloseModal = () => {
    this.setState({ open: false })
    this.props.history.goBack()
  }
  handleSubmit(e) {

    let details = {
      ...this.state,
      phone: parseInt(this.state.phone)
    }
    if (details.name && details.address && details.phone) {
      this.props.addInfo(details)
      console.log(details)
      this.setState({ open: true });
    }
    else
      alert("Required fields are empty...")
  }
  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-2">
            <div>
              <input required ref='name' onChange={(e) => this.handleChange(e)} type="text" placeholder='Enter name' name='name' /><br />
              <textarea required onChange={(e) => this.handleChange(e)} name="address" cols="20" rows="5" placeholder="Enter address"></textarea><br />
              <h4 style={{ color: 'green', display: 'inline' }}>+92</h4> <input required autoComplete='off' onChange={(e) => this.handleChange(e)} type="number" name="phone" placeholder='3xxxxxxxxx' /><br />
              <button onClick={(e) => this.handleSubmit(e)} className='btn btn-info'>Submit</button>
            </div>
          </div>
          <div className="col-md-10">
            <div className='table-responsive'>
              <table className='table table-hover'>
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
                    this.props.order.map((o) => {
                      return <tr>
                        <td>{o.order.name}</td>
                        <td>{o.quantity}</td>
                        <td>{o.order.price}</td>
                        <td>{o.priceForNItems}</td>
                      </tr>
                    })
                  }
                </tbody>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><strong>Grand total: {this.props.total}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} little><br /><br />
          <div className='container'>
            <h1>Order Placed Successfully!</h1>
            <h3>Hope you like the food <strong>{this.props.name.toUpperCase()}</strong>,</h3>
            <h3>Grand Total is {this.props.total}</h3>
          </div>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return ({
    order: state.rootReducer.orders[0],
    name:state.rootReducer.name,
    total:state.rootReducer.amount
  })
}
function mapActionToProps(dispatch) {
  return ({
    addInfo: (info) => {
      dispatch(addInfo(info))
    }
  })
}
export default connect(mapStateToProps, mapActionToProps)(Info)