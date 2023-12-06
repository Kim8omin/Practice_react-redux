//ducks pattern 


//1.Actions (Action Types)
export const ADD_TODO = "ADD_TODO";
export const REMOVE = "REMOVE_TODO";
export const REMOVE_ALL = "REMOVE_ALL"

//2. Reducer

const initialState =[]

export default function todoReducer(state= initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.text);
        case REMOVE:
            return state.slice(0,-1);
        case REMOVE_ALL:
            return [];
        default:
            return state; 
    }

}

//3. Action Creator 
export function addTodoActionCreator(text){
    return {
        type: ADD_TODO,
        text: text
    }
} 

export function removeTodoActionCreator(){
    return {
        type: REMOVE
    }
}

export function removeAllActionCreator(){
    return{
        type: REMOVE_ALL
    }
}

//4. side effect 
