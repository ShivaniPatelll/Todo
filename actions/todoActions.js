export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const deleteTodo = (todoId) => ({
    type: 'DELETE_TODO',
    payload: todoId,
  });
  