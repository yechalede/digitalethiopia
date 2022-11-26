import {INSERTDEPARTMENT,
        GETALLDEPARTMENTS,
        GETDEPARTMENT,
        UPDATEDEPARTMENT,
        DELETEDEPARTMENT} from '../constants'

const departmentReducer=(state=[],action)=>{
    switch(action.type){
        case INSERTDEPARTMENT:
            return [action.payload,...state]
        case GETALLDEPARTMENTS:
            return action.payload
        case DELETEDEPARTMENT:
            return state.filter((department)=>department.id!==action.payload)
        default:
            return state
    }
}
export default departmentReducer