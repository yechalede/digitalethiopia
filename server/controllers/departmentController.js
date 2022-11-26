const {Department} =require('../models/')

//insert a new department
const insertDepartment=async(req,res)=>{
    const {deptName,deptDescription,managedBy}=req.body
    try{
        if(!deptName || !deptDescription|| !managedBy) return res.status(400).json({err:"All fields required!"})
        const newDepartment= await Department.create({deptName,deptDescription, managedBy})
        res.status(201).json({newDepartment})

    }catch(err){
        console.log(err)
        res.status(400).json({err:"somthing went wrong!"})
    }
}

//retrieve singel department
const getDepartment=async(req,res)=>{
    const {id}=req.params
    try {
        const department= await Department.findByPk(id)
        res.status(200).json(department)
        
    } catch (err) {
        console.log(err)
        res.status(400).json({err:"somthing went wrong!"})
    }
}

//retrieve all departments
const getDepartments=async(req,res)=>{
    try {
        const departments= await Department.findAll()
        res.status(200).json(departments)  

    } catch (err) {
        console.log(err)
        res.status(400).json({err:"somthing went wrong!"})    
    } 
}

//update a department
const updateDepartment=async(req,res)=>{
    const {id} =req.params
    const updatedData= req.body
    try {
        await Department.update(updatedData,{where:{id:id}})
        res.status(200).json(updatedData) 

    } catch (err) {
        console(err)
        res.status(400).json({err:"somthing went wrong!"})    
    }
}

//delete a single department
const deleteDepartment=async(req,res)=>{
    const {id}=req.params
    try {   
        await Department.destroy({where:{id:id}})
        res.status(200).json("Delete sucessed")
       
    } catch (err) {
        console.log(err)
        res.status(400).json({err:"somthing went wrong!"})    
    }
}

//under its management
const deptUnderItsManagment=async(req,res)=>{
    const {id}=req.params
    try {
        const department= await Department.findByPk(id)
        const undermanagemnt=await Department.findAll({where:{managedBy:department.deptName}})
        res.status(200).json(undermanagemnt)
        
    } catch (err) {
        console.log(err)
        res.status(400).json({err:"somthing went wrong!"})
    }
}

module.exports={
    insertDepartment,
    getDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment,
    deptUnderItsManagment
}