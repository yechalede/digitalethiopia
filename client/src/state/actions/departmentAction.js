import * as api from '../api/index'

import {INSERTDEPARTMENT,
        GETALLDEPARTMENTS,
        GETDEPARTMENT,
        UPDATEDEPARTMENT,
        DELETEDEPARTMENT} from '../constants'

export const insertDepartment=(newDepartment)=>async(dispatch)=>{
    try {
        const {data}=await api.insertDepartment(newDepartment)
        dispatch({
            type:INSERTDEPARTMENT,
            payload:data.newDepartment
        })
        
    } catch (err) {
        console.log(err)
    }
}

export const getDepartments=()=>async(dispatch)=>{
    try {
        const {data}=await api.getDepartments()
        dispatch({type:GETALLDEPARTMENTS,payload:data})
    } catch (err) {
        console.log(err.err)
    }
}

export const getDepartment=async(id)=>{
    try {
        const {data}=await api.getDepartment(id)
        return data
    } catch (err) {
        console.log(err.err)
    }
}

export const updatedDepartment=(id,updatedDepartment)=>async(dispatch)=>{
    try {   
        const {data}=await api.updateDepartment(id,updatedDepartment)
        dispatch({
                type:UPDATEDEPARTMENT,
                payload:data
            })
    
    } catch (err) {
        console.log(err)
    }
}
export const deleteDepartment=(id)=>async(dispatch)=>{
    try {
        await api.deleteDepartment(id)
        dispatch({
            type:DELETEDEPARTMENT,
            payload:id
        })
    } catch (err) {
        console.log(err)
    }

}
export const deptUnderItsManagment=async(id)=>{
    try {
        const {data}=await api.deptUnderItsManagment(id)
        return data
    } catch (err) {
        console.log(err.err)
    }
}