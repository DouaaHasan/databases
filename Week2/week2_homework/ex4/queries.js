'use strict';

const queries = {
  // All department numbers and the number of employees working there.
  getAllDeptNumbsAndAllEmployeesNumbsAccordingly: `SELECT dept, employee_no FROM employee`,

  // Sum of the salaries of all employees.
  sumSalaries: `SELECT SUM(salary) Total_Salaries FROM Employee`,

  //Ave7rage of the salaries of all employees.
  averageSalaries: `SELECT AVG(salary) Average_Salaries FROM Employee`,

  // Sum of the salaries of the employees per department.
  sumSalariesPerDept: `SELECT SUM(salary) Sum_Salaries_Per_Dept, dept FROM employee GROUP BY dept`,

  // Minimum and maximum od the salaries per department.
  minAndMaxSalariesPerDept: `SELECT dept, MIN(salary), MAX(salary) FROM employee GROUP BY dept`,

  // For each salary value, return the number of employees paid.
  salaryAndMatchingEmpNo: `SELECT salary, COUNT(*) Emp_Amount FROM employee GROUP BY salary ORDER BY salary`,
};

module.exports = queries;
