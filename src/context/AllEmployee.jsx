import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'

export const EmployeeContext = createContext()

const AllEmployee = ({children}) => {

   const [data, setdata] = useState([])

  const getData = async ()=>{
     const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    //  console.log(data.data);
     setdata(resp.data)
    //  console.log(resp.data);
  }
  useEffect(() => {
     getData()
  }, [])

  return (
    <EmployeeContext.Provider value={data}>
        {children}
    </EmployeeContext.Provider>
  )
}

export default AllEmployee