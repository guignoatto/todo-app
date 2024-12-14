import TodoInterface from "../types/types"

interface DeleteButtonInterface {
    id: number,
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

export default function DeleteButton ({id, setTodos} : DeleteButtonInterface) {
    return (
        <button onClick={(e) => {
            e.stopPropagation()
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
          }}>❌</button>
    )
}