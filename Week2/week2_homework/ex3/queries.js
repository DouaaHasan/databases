'use strict';

const queries = {
  // drop mngr full name clmn
  dropMngrFullNameClmn: `ALTER TABLE Employee DROP COLUMN manager_fullName`,
  // Write a query that retrieves all employees and their corresponding manager's full name.
  addManagersFullName: `ALTER TABLE Employee ADD manager_fullName VARCHAR(50)`,
  // insertManagersNames:
  getAllEmployeesAndTheirManagers: `SELECT full_name emp_name, manager_fullName mng_name FROM employee`,
  // Write a query that retrieves all employees and their working department title. If no employee worked in a specific department, return the department too.
  getAllEmployeesAndAllDepartments: `SELECT full_name Emp_FullName, title Dept_Title FROM Employee e RIGHT JOIN Department d ON e.dept = d.dept_no`,
};

module.exports = queries;
