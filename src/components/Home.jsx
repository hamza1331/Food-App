import React, { Component } from 'react'
import menu from './menu'
import { connect } from "react-redux";
import { addOrder, calculateTotal } from "../store/actions/actions";
import Modal from 'react-responsive-modal';
class Home extends Component {
constructor(props){
    super(props)
    this.state={
        quantity:1,
        open: false,
        email:'',
        pw:''
    }
}

onCloseModal = () => {
    this.setState({ open: false });
};
handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}
handleLogin(e){
    e.preventDefault();
    let email = this.props.email,
    pw = this.props.pw;
    this.onCloseModal()
    if(this.state.email===email && this.props.pw===pw)
    {
        this.props.history.push('/admin')
    }
    else{
        alert('Wrong Email/Pasword')
    }
    
}
onOpenModal = () => {
    this.setState({ open: true });
};
orders=[]
 handleOrder(e,index){
     let order=menu[index]
     let priceForNItems = 0;
     let quantity=this.state.quantity
     priceForNItems=quantity*order.price
     this.setState({
         quantity:1
     })
     let finalOrder = {
         order,
         quantity,
         priceForNItems
     }
     this.orders.push(finalOrder)
 }
 handleSubmit(){
     this.props.placeOrder(this.orders)
     let total = 0
     this.orders.map(order =>{
         total+=order.priceForNItems
     })
     this.props.calculateTotal(total);
     this.orders=[]
     this.props.history.push('/info')
    // this.props.history.push('/admin')
 }
 handleQuantity(e){
     this.setState({
         quantity:parseInt(e.target.value)
     })
 }
  render() {
    const { open } = this.state;
    return (
      <div className='container'>
      <button style={{float:'right'}} className='btn btn-info btn-lg' onClick={this.onOpenModal}>Admin Login</button><br/><br/><br/>
      <div className="row">
      {menu.map((item,index)=>{
          return(
              <div key={index} style={{border:'2px groove #f84747',borderRadius:'8px'}} className="col-md-4">
              <h2>
                  {item.name}
              </h2>
              <h3>Price:{item.price}</h3>
              <div className="row">
              <div className="col-md-6">
              
              Quantity<input  onChange={(e)=>this.handleQuantity(e)} ref={'quantity'+index} type="number" defaultValue='1' name=""/>
              </div>
              <div className="col-md-6">
              <button onClick={(e)=>this.handleOrder(e,index)} className='btn btn-danger'>Add Order</button>
              </div>
              </div>
              </div>
          )
      })}
      </div>
      <br/>
      <br/>
      <button onClick={()=>this.handleSubmit()} className='btn btn-info'>Submit Order</button>
      
      
      <Modal open={open} onClose={this.onCloseModal} little><br /><br />
                    <div className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input 
                                autoComplete='off' 
                                style={{width:'600px'}} 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Enter email"
                                onChange={e=>this.handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <input onChange={e=>this.handleChange(e)} style={{width:'600px'}} type="password" className="form-control" name='pw' placeholder="Enter password" />
                            </div>
                        </div>
                        <button onClick={e=>this.handleLogin(e)} className='btn btn-info pull-right btn-lg'>Login</button>
                    </div>
                </Modal>
      </div>
    )
  }
}
function mapStateToProps(state){
    return({
        email:state.rootReducer.email,
        pw:state.rootReducer.pw
    })
}
function mapActionToProps(dispatch){
    return({
        placeOrder:(order)=>{
            dispatch(addOrder(order))
        },
        calculateTotal:(total)=>{
            dispatch(calculateTotal(total))
        }
    })
}
export default connect(mapStateToProps,mapActionToProps)(Home)
