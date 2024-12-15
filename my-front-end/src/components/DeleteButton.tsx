import axios from "axios"
import TodoInterface from "../types/types"

interface DeleteButtonInterface {
    id: number,
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

export default function DeleteButton ({id, setTodos} : DeleteButtonInterface) {
    const deleteUser = async (id: number) => {
        try {
          await axios.delete(`http://localhost:4000/todos/${id}`);
          console.log('Tarefa deletada com sucesso!');
        } catch (error) {
          console.error('Erro ao deletar tarefa: ', error);
        }
      }

    return (
        <button onClick={(e) => {
            e.stopPropagation()
            deleteUser(id)
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
          }}>❌</button>
    )
}