



export default AddTodoMain=(todo)=>{
    return dispatch => {
        dispatch(addTodo(todo))
    }
}


const addTodo=(todo)=>({
    type:'ADD_TO_DO',
    payload:todo

})