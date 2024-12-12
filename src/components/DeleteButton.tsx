export default function DeleteButton ({id, setTodos}) {
    return (
        <button onClick={(e) => {
            e.stopPropagation()
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
          }}>❌</button>
    )
}