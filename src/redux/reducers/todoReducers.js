import { ADD_TODO, REMOVE, REMOVE_ALL } from "../actions";

const initialState =[]

function todoReducer(state= initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.text);
        case REMOVE:
            return state.slice(0,-1);
        case REMOVE_ALL:
            return state;
        default:
            return []
    }

}

export default todoReducer; 