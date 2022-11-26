const express =require('express')
const router = express.Router()
const { insertDepartment,
        getDepartment, 
        getDepartments,
        updateDepartment, 
        deleteDepartment,
        deptUnderItsManagment } = require('../controllers/departmentController')

router.post('/',insertDepartment)
router.get('/:id', getDepartment)
router.get('/',getDepartments)
router.put('/:id', updateDepartment)
router.delete('/:id', deleteDepartment)
router.get('/underitsmanagement/:id', deptUnderItsManagment)


module.exports=router