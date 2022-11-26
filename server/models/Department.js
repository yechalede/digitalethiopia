module.exports=(sequelize,DataTypes)=>{
    const Department = sequelize.define('Department',
   {
       id:{
           type : DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       deptName:{
           type: DataTypes.STRING,
           allowNull: false,
       },
       deptDescription:{
           type: DataTypes.STRING,
           allowNull: false,
       },
       managedBy:{
           type: DataTypes.STRING,
           allowNull:false,
       }
    
   })
  
  return Department 
}
