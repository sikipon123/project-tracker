import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './css/styles.css';

class index extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            email:'',
            phoneNumber: '',
            errors:{}
        }
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault();

        const studentNewData={
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
        };

        this.props.updateStudent(this.props.authStudent.student.id,studentNewData);
        
    }
    componentDidMount(){
        const {username,email} =this.props.authStudent.student;
        this.setState({
            username,
            email
        })
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="row account-update">
                <form noValidate className="account-form" onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        defaultValue={this.state.username} 
                        className={classnames('form-control',
                        {'is-invalid':errors.username})} 
                        id="exampleInputUsername" 
                        onChange={(e)=>this.handleChange(e)}/>
                        {errors.username&&(<div className="invalid-feedback">{errors.username}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        defaultValue={this.state.email} 
                        className={classnames('form-control',
                        {'is-invalid':errors.email})} 
                        id="exampleInputEmail1" 
                        onChange={(e)=>this.handleChange(e)}/>
                        {errors.email&&(<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <label >New Password</label>
                        <input type="password" name="password" defaultValue={this.state.password} 
                        className={classnames("form-control",{'is-invalid':errors.username})} 
                        id="exampleInputPassword1" onChange={(e)=>this.handleChange(e)}/>
                        {errors.password&&(<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="number" name="number" defaultValue={this.state.phoneNumber} 
                        className={classnames("form-control",{'is-invalid':errors.phoneNumber})} 
                        id="exampleInputphoneNumber1" onChange={(e)=>this.handleChange(e)}/>
                        {errors.phoneNumber&&(<div className="invalid-feedback">{errors.phoneNumber}</div>)}
                    </div>
                    <button type="submit" className="btn btn-success">Save Changes</button>
                </form>
            </div>
        )
    }
}
index.propTypes = {
    updateStudent: PropTypes.func.isRequired,
    authStudent: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}

export default index;