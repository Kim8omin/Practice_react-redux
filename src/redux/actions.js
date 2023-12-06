//export Action type
export const ADD_TODO = "ADD_TODO";
export const REMOVE = "REMOVE_TODO";
export const REMOVE_ALL = "REMOVE_ALL"


//Action Creaters function 

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