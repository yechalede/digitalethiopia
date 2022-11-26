import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getDepartment } from '../../state/actions/departmentAction'
const DepartmentDtail = () => {
    const [departmentDetail, setDepartmentDetail]=useState()
    const params=useParams()
    const navigate=useNavigate()
    const {id}=params

    useEffect(()=>{
        getDepartment(id).then(res=>{
        setDepartmentDetail(res)
        })
    },[])
    
  return (
    <div className="container">
    <div className='staff-management'>
        <div className="manage"> 
            <div className="staff-card ">{departmentDetail &&<>
                <div className="staffs-header">
                    <h1>{departmentDetail.deptName } Department</h1>
                    <p>Managed BY : {departmentDetail.managedBy}</p>
                    <p>Description : {departmentDetail.deptDescription}</p>
                    <div className="add-new-staff">
                            <p onClick={(e)=>navigate(`/underitsmanagement/${id}`)} >Click Here to view Departments under {departmentDetail.deptName}</p>
                    </div>
                </div>
                </>
                    
                }
            </div>       
    </div>
    </div>
  </div>
  )
}

export default DepartmentDtail