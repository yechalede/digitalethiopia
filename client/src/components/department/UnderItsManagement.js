import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deptUnderItsManagment ,getDepartment } from '../../state/actions/departmentAction'
const UnderItsManagement = () => {
    const [underitsmanagement, setUnderItsManagement]=useState()
    const [department,setDepartment]=useState(null)
    const params=useParams()
    const {id}=params
    useEffect(()=>{
        getDepartment(id).then(res=>{
            setDepartment(res.deptName)
        })
        deptUnderItsManagment(id).then(res=>{
        setUnderItsManagement(res)
        })
    },[])
  return (
    <div className="container">
    <div className='staff-management'>
        <div className="manage"> 
            <div className="staff-card ">{!underitsmanagement?<p>No Department yet under {department}!</p>: null }{underitsmanagement &&<>
                <div className="staffs-header">
                    <h4>The following Departments are under {department}</h4>
                    {underitsmanagement.map((department)=>(
                        <div id={department.id}>
                            <h1>{department.deptName}</h1>
                        </div>
                    ))}
                </div>
                </>
                    
                }
            </div>       
    </div>
    </div>
  </div>
  )
}

export default UnderItsManagement