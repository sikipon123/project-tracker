import axios from 'axios';

import {GET_INSTRUCTORS} from './types';
import {GET_ERRORS} from './types';

export const setInstructors=()=>dispatch=>{
    axios
        .get('/api/admin/instructors')
        .then(res=>dispatch({
            type:GET_INSTRUCTORS,
            payload:res.data
        }))
        .catch(err=>console.log(err));
};

//enable/disable instructor
export const toggleInstructor=(idInstructor,isActive)=>dispatch=>{
    axios.put(`/api/admin/instructor/${idInstructor}`,{isActive})
        .then(res=>{
            dispatch({
                type:GET_INSTRUCTORS,
                payload:res.data
            })
        })
        .catch(err=>dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}