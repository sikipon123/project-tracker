import React, { Component } from 'react';
import './css/styles.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {loginStudent} from '../../actions/authStudentAction';

class index extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{},
        }
    }
    componentDidMount(){
        if(this.props.authStudent.isAuthenticated){
            this.props.history.push('/studentdashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.authStudent.isAuthenticated){
            this.props.history.push('/studentdashboard');
        }

        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault();

        const studentData={
            username: this.state.username,
            password: this.state.password
        };

        this.props.loginStudent(studentData);
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="container-fluid">
                <div className="row login">
                <form noValidate className="login-form" onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        defaultValue={this.state.username} 
                        className={classnames('form-control',
                        {'is-invalid':errors.username})} 
                        // className="form-control"
                        id="exampleInputEmail1" 
                        onChange={(e)=>this.handleChange(e)}/>
                        {errors.username&&(<div className="invalid-feedback">{errors.username}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name="password" defaultValue={this.state.password} 
                        className={classnames("form-control",{'is-invalid':errors.username})} 
                        // className="form-control"
                        id="exampleInputPassword1" onChange={(e)=>this.handleChange(e)}/>
                        {errors.password&&(<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
                <div className="row sticky-footer">
                    <div className="copyright text-center">
                        <span>Copyright © Project Tracker 2020</span>
                    </div>
                </div>
            </div>
        )
    }
}
index.propTypes = {
    loginStudent: PropTypes.func.isRequired,
    authStudent: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authStudent: state.authStudent,
    errors: state.errors
})
export default connect(mapStateToProps,{loginStudent})(index);
