//container component (connect redux with react)
import { connect } from "react-redux";
import TodoApp from '../../components/TodoApp'; 
import { addTodoActionCreator, removeTodoActionCreator,removeAllActionCreator } from "../actions";
//import { addTodoActionCreator, removeTodoActionCreator,removeAllActionCreator } from "../ducks/todoDucks";
import ThunkActionCreator from '../thunks/addTodoThunk';

function mapStateToProps(state,ownProps){
    return {todoItems:state.todo};
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        addTodo: (text) =>{
            //dispatch(addTodoActionCreator());
            dispatch(ThunkActionCreator(text));
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

