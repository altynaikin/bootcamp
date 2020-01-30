let NextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: NextTodoId++,
  text 
})