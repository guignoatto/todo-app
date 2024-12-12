export default function Counter({ todos }) {

  const completedTodosNumber = todos.filter((todo) => todo.isCompleted === true).length
  return <p>
  <b>{ completedTodosNumber }</b>/{ todos.length } todos completed
</p>
}
