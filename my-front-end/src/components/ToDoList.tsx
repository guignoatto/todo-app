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
              onClick={() => {
                setTodos(
                  todos.map((t) => {
                    if (t.id === item.id){
                      return {...t, isCompleted: !t.isCompleted}
                    }
                    return t
                  })
                )
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
