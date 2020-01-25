import axios from 'axios';
import setAuthAdminToken from '../utils/setAuthAdminToken';
import jwt_decode from 'jwt-decode';

import {SET_CURRENT_ADMIN} from './types';
import {GET_ERRORS} from './types';
// Login - Get Admin Token
export const loginAdmin = adminData =>dispatch=>{
    axios.post('/api/admin/login',adminData)
        .then(res=>{
            //save to localStorage
            const {token}= res.data;
            //set token to LS
            localStorage.setItem('jwtToken',token);
            //set token to Auth header
            setAuthAdminToken(token);
            //decode token to get user data
            const decoded = jwt_decode(token);
            //set current admin
            dispatch(setCurrentAdmin(decoded));
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}
//set logged Admin
export const setCurrentAdmin=decoded=>{
    return{
        type:SET_CURRENT_ADMIN,
        payload:decoded
    }
}

//logout admin
export const logoutAdmin=()=>dispatch=>{
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    // remove authAdmin header for future requests
    setAuthAdminToken(false);
    // set current Admin to {} which will set isAuthenticated to false
    dispatch(setCurrentAdmin({}));
    window.location.href = '/adminlogin';
}

//update admin
export const updateAdmin=(idAdmin,newData)=>dispatch=>{
    axios.put(`/api/admin/update/${idAdmin}`,newData)
        .then(res=>{
            //logout admin after updating info
            // remove token from local storage
            localStorage.removeItem('jwtToken');
            // remove authAdmin header for future requests
            setAuthAdminToken(false);
            // set current Admin to {} which will set isAuthenticated to false
            dispatch(setCurrentAdmin({}));
            window.location.href = '/adminlogin';
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}