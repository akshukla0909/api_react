import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const EmployeeCard = ({data}) => {
    const {id,name,username,email,phone} = data
    
    const [deleted, setdeleted] = useState(false)

    const handleDelete = ()=>{
      console.log('hello');
      setdeleted(true)
    }

    // if delted render nothing
    if (deleted) {
      return null;
  }


  return (
        <div className='border border-b rounded-t-none h-16 w-full flex items-center justify-between px-4 cursor-pointer'>
        <Link to={`employee/${id}`} className='h-16 w-full flex items-center justify-between px-4 cursor-pointer'>
        <h3 style={{flexBasis: "10%"}} >{id}</h3>
        <p style={{flexBasis : "20%"}} >{name}</p>
        <p style={{flexBasis : "20%"}} >{username}</p>
        <p style={{flexBasis : "30%"}} >{email}</p>
        <p style={{flexBasis : "20%"}} >{phone}</p>
        </Link>
        <p onClick={handleDelete}>
        <MdDelete
         className='text-[22px]'
        />
        </p>
    </div>
  )
}

export default EmployeeCard