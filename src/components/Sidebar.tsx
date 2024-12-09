import { useState } from "react"
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

interface SidebarProps {
  handleSendToList(input:string):void;
}

export default function Sidebar({handleSendToList}: SidebarProps) {
  const [input, setInput] = useState('')

  function sendButton () {
    handleSendToList(input);
    setInput('');
  }
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        <Button buttonType="secondary"> Log In </Button>
        <Button buttonType="secondary"> Register </Button>
      </div>
      
    </section>
  )
}