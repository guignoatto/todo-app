const initialTodos = ['buy groceries', 'walk the dog', 'do laundry', 'test']

export default function ToDoList() {

  return (
    <ul>
      {
        initialTodos.map((item) => (
            <li 
              key={item} 
              className='flex justify-between items-center px-8 h-[50px] text-14px] cursor-pointer border-b border-black/[8%]'
            >
                <span>{item}</span>
                <button>❌</button>
            </li>
        ))}

    </ul>
  );
}
