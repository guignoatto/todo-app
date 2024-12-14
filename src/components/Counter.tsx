import TodoInterface from "../types/types"

interface CounterInterface {
  todos: TodoInterface[]
}

export default function Counter({ todos } : CounterInterface) {

  const completedTodosNumber = todos.filter((todo) => todo.isCompleted === true).length
  return <p>
  <b>{ completedTodosNumber }</b>/{ todos.length } todos completed
</p>
}
