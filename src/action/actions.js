import {ADD_TASK,REMOVE_TASK,TOGGLE_TODO,EDIT_TODO} from "../action/actionType"


export const addTask=(payload)=>{
    return{type:ADD_TASK,payload}
}
export const remove=(payload)=>{
    return{type:REMOVE_TASK,payload}
}
export const toggle_todo=(payload)=>{
    return {type:TOGGLE_TODO,payload}
}
export const edit_todo=(id,payload)=>{
    return{type:EDIT_TODO,id,payload}
}

