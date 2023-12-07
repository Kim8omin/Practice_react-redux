//container makes a connection redux with react.
//container is a part for calling the action creator function.(in todoSlice this case)


import { connect } from "react-redux";
import TodoApp from '../../components/TodoApp'; 
//import { addTodoActionCreator, 
//    removeTodoActionCreator,
//    removeAllActionCreator } from "../actions";
//import { addTodoActionCreator, 
//removeTodoActionCreator,
//removeAllActionCreator } from "../ducks/todoDucks";
import {
    addTodo as addTodoActionCreator,
    removeTodo as removeTodoActionCreator,
    removeAll as removeAllActionCreator
} from "../slice/todoSlice"

//import ThunkActionCreator from '../thunks/addTodoThunk';

function mapStateToProps(state,ownProps){
    return {todoItems:state.todo};
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        addTodo: (text) =>{
            dispatch(addTodoActionCreator(text));
            //dispatch(ThunkActionCreator(text));
        },
        removeTodo: ()=>{
            dispatch(removeTodoActionCreator());
        },
        removeAll: ()=>{
            dispatch(removeAllActionCreator()); 
        },
        //dispatch async function (will handle in asyncFunctionMiddleware)
        triggerAsyncFunction: (asyncFunction)=>{
            dispatch(asyncFunction);
        }
    }
}

const TodoAppContainer = connect
(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer; 

