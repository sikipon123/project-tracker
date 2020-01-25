import axios from 'axios';

import {GET_STUDENTS} from './types';
import {GET_ERRORS} from './types';

export const setStudents=()=>dispatch=>{
    axios
        .get('/api/admin/students')
        .then(res=>dispatch({
            type:GET_STUDENTS,
            payload:res.data
        }))
        .catch(err=>console.log(err));
};

//enable/disable student
export const toggleStudent=(idStudent,isActive)=>dispatch=>{
    axios.put(`/api/admin/student/${idStudent}`,{isActive})
        .then(res=>{
            dispatch({
                type:GET_STUDENTS,
                payload:res.data
            })
        })
        .catch(err=>dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}