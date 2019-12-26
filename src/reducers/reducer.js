import { ADD_TASK, REMOVE_TASK, TOGGLE_TODO, EDIT_TODO } from "../action/actionType"



const intialState = { todo: [] }

const TodoReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state,todo:state.todo.concat(action.payload)};
        case REMOVE_TASK:
            return ({...state,todo:state.todo.filter((el, key) => key !== action.payload)});
        case TOGGLE_TODO:
            return {...state,todo:state.todo.map((el, key) =>
                key === action.payload ? { ...el, isComplete: !el.isComplete } : el)};
        case EDIT_TODO:
            return {...state,todo:state.todo.map((el, key) =>
                el.id === action.id ? { ...el, title: action.payload } : el)}


        default:
            return state
    }

}
export default TodoReducer