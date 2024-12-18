import axios from "axios";
import TodoInterface from "../types/types";
import DeleteButton from "./DeleteButton";

interface TodoListInterface {
  todos: TodoInterface[],
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

export default function ToDoList({ todos, setTodos } : TodoListInterface) {  
  return (
    <ul>
      {
        todos.length === 0 && <li className="h-full flex justify-center items-center fonte-semibold opacity-50">Start by adding a todo...</li>
      }
      {
        todos.map((item) => (
            <li 
              key={item.id} 
              className='flex justify-between items-center px-8 h-[50px] text-14px] cursor-pointer border-b border-black/[8%]'
              onClick={async () => {
                const updatedTodos = await Promise.all(
                  todos.map(async (t) => {
                    if (t.id === item.id) {
                      try{
                        const response = await axios.put(`http://localhost:4000/todos/${item.id}`, {
                          isCompleted: !t.isCompleted,
                        });
                        console.log(response)
                        return { ...t, isCompleted: response.data.updatedUser.isCompleted };
                      } catch (error) {
                        console.log(error.message)
                      }
                    }
                    return t;
                  })
                );
                setTodos(updatedTodos);
              }}
            >
                <span 
                  className={`${item.isCompleted ?'line-through text-[#ccc]' : '' }`}
                >
                  {item.text}
                </span>
                <DeleteButton id={item.id} setTodos={setTodos}/>
            </li>
        ))}

    </ul>
  );
}
