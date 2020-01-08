'use strict';

const queries = {
  getAllEmployeesAndTheirManagers: `SELECT e1.employee_no Emp_no, e2.full_name Manager FROM employee e1, employee e2 WHERE e1.manager = e2.employee_no;`,
  // Write a query that retrieves all employees and their working department title. If no employee worked in a specific department, return the department too.
  getAllEmployeesAndAllDepartments: `SELECT full_name Emp_FullName, title Dept_Title FROM Employee e RIGHT JOIN Department d ON e.dept = d.dept_no`,
};

module.exports = queries;
