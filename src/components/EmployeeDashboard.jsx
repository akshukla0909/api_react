import React, { useState, useContext } from 'react'
import EmployeeCard from './EmployeeCard'
import { EmployeeContext } from '../context/AllEmployee'

const EmployeeDashboard = () => {

  const data = useContext(EmployeeContext);
  const [searchId, setSearchId] = useState('')
  const [searchResult, setSearchResult] = useState(null)
 
  const handleSearch = ()=>{
       const result = data.find((employee)=>{
             return employee.id === parseInt(searchId)
       })
       setSearchResult(result)
       console.log(result);
  }

  return (
    <div className='employee-dash'>
       <h1 className='bg-[#8A5CF7] h-12 text-[20px] flex items-center px-10 text-white capitalize font-medium'>employee dashboard</h1>
       <div className='flex items-center justify-between px-16'>
       <p className='bg-red-00 flex items-center h-16'>Employee Details</p>
      <div className='search'>
      <input type="text" 
       placeholder='Search for a employee' 
       className='h-10 px-2 outline-none rounded-lg rounded-r-none border border-gray-400'
       name='search'
       value={searchId}
       onChange={e => setSearchId(e.target.value)}
       />
       <button 
       className='p-2 rounded-lg rounded-l-none bg-[#8a5cf7] text-white border border-gray-400'
       onClick={handleSearch}
       >Search</button>
      </div>
       </div>
 
     <div className='empl-cards px-16'>
      <div className='bg-[#e5e7eb] rounded-lg rounded-b-none h-10 w-full flex gap-20 items-center px-4'>
        <h3>Employee Id</h3>
        <p className='-px-10'>Name</p>
        <p className='px-10'>Username</p>
        <p className='px-20'>Email</p>
        <p className='px-32'>Phone</p>
      </div>

     {searchResult ? (
      <EmployeeCard data={searchResult} />
     ) : (
      <div>
         {data.map((el,id)=>{
        return <EmployeeCard key={id} data={el} />
     })}
      </div>
     )}
     </div>

    </div>
  )
}

export default EmployeeDashboard