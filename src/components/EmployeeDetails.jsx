import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../context/AllEmployee';

const EmployeeDetails = () => {

   const data = useContext(EmployeeContext)
//    console.log(data);
   const {id} = useParams()
   let [employee, setemployee] = useState(null)
   
   const SelectedEmployee = data.find((emp)=>{
         return emp.id === parseInt(id)
   })

   useEffect(() => {
   setemployee(SelectedEmployee)

   }, [SelectedEmployee])
   

   const handleDelete = (params)=>{
    setemployee(null)
   }


  return (
    <div className='employee-card'>
       <h3 className='bg-[#8A5CF7] h-12 text-[20px] flex items-center px-10 text-white capitalize font-medium'>Employee Profile</h3>
       

         <div className='card w-full px-20'>
            {employee ? (
                <div >
                  <div className='flex justify-between items-center w-full'>
                  <h3
                  className='text-[20px] flex items-center h-16'
                  >Basic Details</h3>      
                 <div>
                 <button
                  className='px-4 h-10 mx-5 py-2 rounded-lg  bg-[#8a5cf7] text-white border border-gray-400'
                   >Edit Details</button>
                   <button 
                  className='p-2 px-10  rounded-lg bg-[#8a5cf7] text-white border border-gray-400'
                  onClick={()=>{handleDelete(id)}}
                  >Delete</button>
                 </div>
                  </div>
                  
                  <div className='border border-b-2 rounded-lg w-full px-10'>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Name</p>
                    <p style={{flexBasis: "30%"}}>{employee.name}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Username</p>
                    <p style={{flexBasis: "30%"}}>{employee.username}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Email</p>
                    <p style={{flexBasis: "30%"}}>{employee.email}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Phone</p>
                    <p style={{flexBasis: "30%"}}>{employee.phone}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Website</p>
                    <p style={{flexBasis: "30%"}}>{employee.website}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Company</p>
                    <p style={{flexBasis: "30%"}}>{employee.company.name}</p>
                  </div>
                  <div className='flex h-12 w-full items-center cursor-pointer'>
                    <p style={{flexBasis: "40%"}}>Address</p>
                    <p  style={{flexBasis: "15%"}}>{employee.address.street}</p>
                    <span className='mx-10' >{employee.address.city}</span>
                    <span>{employee.address.suite}</span>
                  </div>
                  </div>
                </div>
            ) : (
                <div>
                    <h3 className='font-semibold text-[22px] mt-2'>No employee present</h3>
                </div>
            )}
         </div>
        

    </div>

  )
}

export default EmployeeDetails