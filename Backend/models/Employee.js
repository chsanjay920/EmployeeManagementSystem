const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  hire_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  role: {
    type: String,
    required: true,
  },
  salary:{
    type:Number,
    required:true
  },
  working_status:{
    type:String,
    required:false,
    default:'Active'
  },
  manager_id:{
    type:String,
    required:true
  },
  department_id:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
