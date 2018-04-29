import React from 'react';
import Modal from 'react-responsive-modal';
export default class App extends React.Component {
    state = {
        open: false,
        email:'',
        pw:''
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.onCloseModal()
    }
    render() {
        const { open } = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
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
                        <button onClick={e=>this.handleSubmit(e)} className='btn btn-info pull-right btn-lg'>Login</button>
                    </div>
                </Modal>
            </div>
        );
    }
}