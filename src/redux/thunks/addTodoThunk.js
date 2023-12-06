//thunk action creator page
//async => setTimeout()

import {
    ADD_TODO,
    REMOVE,
    addTodoActionCreator,
    removeTodoActionCreator
} from "../actions";

const TODO_MAX_COUNT = 3 ;

function ThunkActionCreator(text) {
    return async function addTodoThunk(dispatch,getState){
        const state = getState();

        if(state.todo.length< TODO_MAX_COUNT){
            dispatch(addTodoActionCreator('adding new thing to do... '));
            setTimeout(()=>{
                dispatch(removeTodoActionCreator());
                dispatch(addTodoActionCreator(text));},3000);
                return;

        }else {
            dispatch(addTodoActionCreator('no more than 3 things a day plz !'));
            setTimeout(()=>{
                dispatch(removeTodoActionCreator());
            },3000);
        }
    }
}

export default ThunkActionCreator;