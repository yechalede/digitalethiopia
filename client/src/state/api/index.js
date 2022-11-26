import axios from "axios";
const API=axios.create({baseURL:process.env.REACT_APP_API_URL })


// Departments
export const insertDepartment=(newDepartment)=>API.post(`/department`,newDepartment)
export const getDepartments=()=>API.get(`/department`)
export const getDepartment=(id)=>API.get(`/department/${id}`)
export const updateDepartment=(id, updatedDepartment)=>API.put(`/department/${id}`,updatedDepartment)
export const deleteDepartment=(id)=>API.delete(`/department/${id}`)
export const deptUnderItsManagment=(id)=>API.get(`department/underitsmanagement/${id}`)
