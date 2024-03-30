import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const Todo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className='todo relative mt-4 bg-black text-white py-5 px-16 rounded-md'>
        <div>{text}</div>
        <div className='icons absolute top-2/4 -translate-y-1/2 right-5 flex gap-5'>
            <BiSolidEdit className='icon cursor-pointer text-xl' onClick={updateMode} />
            <MdDeleteForever className='icon cursor-pointer text-xl' onClick={deleteTodo} />
        </div>
    </div>
  )
}

export default Todo;