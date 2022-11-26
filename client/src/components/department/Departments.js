import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import {useNavigate } from 'react-router-dom'
import Select from "react-select";
import tableIcons from '../icons/TableIcons'
import {insertDepartment,
        getDepartments,
        getDepartment,
        updatedDepartment,
        deleteDepartment} from '../../state/actions/departmentAction'

const Departments = () => {
  const dispatch=useDispatch()
  const defaultMaterialTheme = createTheme();
  const [departments, setDepartments]= useState([])

  let departmentOptions=[{value:"self",label:"self"}]
  departments && departments.forEach((department)=>{
    departmentOptions.push({value:department.deptName,label:`${department.deptName}`})
  })
  
  
  let departmentsState=useSelector((state)=>state.departments)
  const colums=[
    {title:"Department",field:"deptName",validate: rowData => rowData && rowData.deptName!==undefined? (rowData.deptName.length < 3?{ isValid: false, helperText: 'Department Name must be at least 3 characters'} : true):{ isValid: false}},
    {title:"Description",field:"deptDescription", validate: rowData => rowData && rowData.deptDescription!==undefined? (rowData.deptDescription.length < 3?{ isValid: false, helperText: 'Department description must be at least 3 characters'} : true):{ isValid: false}},
    {
      title: "Managed By",
      field: "managedBy",
      editComponent: ({ value, onChange }) => (
        <Select
          options={departmentOptions}
          name="Managed By"
          onChange={(selectedOption) => onChange(selectedOption.value)}
          value={value ? value.value : value}
        />
      )
    }  
  ] 

  useEffect(()=>{
      dispatch(getDepartments())
      setDepartments(departmentsState)
  },[dispatch])
  const navigate=useNavigate()
  const handelDeptDetail=(id)=>{
    navigate(`/department/detail/${id}`)
  }

  return (
    <div className='container'>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
        columns={colums}
        data={departments && departmentsState  }
        editable={{
          onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
            try {
              dispatch(insertDepartment(newRow))
              navigate('/')
              resolve() 
             } catch (err) {
               console.log(err)
              resolve()
             }
          }),
          onRowUpdate:(newRow,oldRow)=> new Promise((resolve,reject)=>{
            try {
            dispatch(updatedDepartment(newRow.id,newRow))
              resolve()
              
            } catch (err) {
              console.log(err)
              resolve()
            }
          }),
          onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
            try {
              dispatch(deleteDepartment(selectedRow.id))
              resolve()
              
            } catch (err) {
              console.log(err)
              resolve()

            }
          })
          
        }}
        style={{maxHeight:"100%",maxWidth:"100%"}}
            icons={tableIcons}
            title="Department List"
            
            options={{filtering:true,
                      searchFieldAlignment:"right",
                      pageSizeOptions:[5,10,25,50,100],
                      pageSize:5,
                      exportButton:true,
                      addRowPosition:"first",
                      actionsColumnIndex:-1,    
                      headerStyle:{backgroundColor:"#b4becb"}   
            }}
            actions={[
              {
                icon: tableIcons.DetailPanel,
                tooltip: `View Departments Detail` ,
                onClick: (event, rowData) => {handelDeptDetail(rowData.id)},
                
              },]}
        />
        </ThemeProvider>
      </div>
  )
}

export default Departments