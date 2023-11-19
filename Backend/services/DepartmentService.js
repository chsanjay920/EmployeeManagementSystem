const department = require('../models/Department')

DepartmentService = function() {
  this.GetDepartmentID = async function(name) {
    const department = await department.find({department_name:name})
    console.log("sanjay");
    console.log(department);
  };
};

exports.DepartmentService = DepartmentService;