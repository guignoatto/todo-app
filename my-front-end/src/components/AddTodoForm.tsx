import { useState } from "react";
import Button from "./Button";
import TodoInterface from "../types/types";
import axios from "axios";

interface AddTodoForm {
  todos: TodoInterface[];
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

export default function AddTodoForm({ todos, setTodos }: AddTodoForm) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (todoText.trim() === "") return;

        if (todos.length >= 3) {
          alert("Log in to add more than 3 todos");
          return;
        } else {
          try {
            const response = await axios.post("http://localhost:4000/todos", {
              text: todoText,
              isCompleted: false,
            });
            if (response.data)
              setTodos((prev) => [
                ...prev,
                {
                  id: response.data.id,
                  text: response.data.text,
                  isCompleted: response.data.isCompleted,
                },
              ]);
          } catch (error) {
            alert(error.response.data.message)
          }
        }

        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my=[9px] text-[14px] block w-full px-[16px]"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button buttonType={"submit"}> Add to List </Button>
    </form>
  );
}
