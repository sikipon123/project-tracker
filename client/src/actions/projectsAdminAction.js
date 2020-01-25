import axios from 'axios';

import {GET_PROJECTS} from './types';
import {GET_ERRORS} from './types';
//get projects
export const setProjects=()=>dispatch=>{
    axios
        .get('/api/admin/projects')
        .then(res=>dispatch({
            type:GET_PROJECTS,
            payload:res.data
        }))
        .catch(err=>console.log(err));
};

//assign project to an instructor
export const assignProject=(idProject,idInstructor)=>dispatch=>{
    axios.put(`/api/admin/project/${idProject}`,{idInstructor})
        .then(res=>{
            dispatch({
                type:"GET_PROJECTSS",
                payload:res.data
            })
        })
        .catch(err=>dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}