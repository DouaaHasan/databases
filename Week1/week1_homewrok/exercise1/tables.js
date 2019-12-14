'use strict';

const tables = {
  employees: [
    { emp_no: 1, emp_name: 'one', salary: 1000, reports_to: 1 },
    { emp_no: 2, emp_name: 'two', salary: 2000, reports_to: 1 },
    { emp_no: 3, emp_name: 'there', salary: 3000, reports_to: 2 },
    { emp_no: 4, emp_name: 'four', salary: 4000, reports_to: 2 },
    { emp_no: 5, emp_name: 'five', salary: 5000, reports_to: 3 },
    { emp_no: 6, emp_name: 'six', salary: 4000, reports_to: 3 },
    { emp_no: 7, emp_name: 'seven', salary: 1000, reports_to: 4 },
    { emp_no: 8, emp_name: 'eight', salary: 2000, reports_to: 4 },
    { emp_no: 9, emp_name: 'nine', salary: 3000, reports_to: 5 },
    { emp_no: 10, emp_name: 'ten', salary: 5000, reports_to: 5 },
  ],
  departments: [
    { dept_no: 11, dept_name: 'Eleven', manager: 1 },
    { dept_no: 12, dept_name: 'Twelve', manager: 1 },
    { dept_no: 13, dept_name: 'Thirteen', manager: 2 },
    { dept_no: 14, dept_name: 'Fourteen', manager: 2 },
    { dept_no: 15, dept_name: 'Fifteen', manager: 3 },
    { dept_no: 16, dept_name: 'Sixteen', manager: 3 },
    { dept_no: 17, dept_name: 'Seventeen', manager: 4 },
    { dept_no: 18, dept_name: 'Eighteen', manager: 4 },
    { dept_no: 19, dept_name: 'Nineteen', manager: 5 },
    { dept_no: 20, dept_name: 'Twenty', manager: 5 },
  ],
  projects: [
    {
      proj_no: 111,
      proj_name: 'Project_111',
      starting_date: '2019-01-01',
      ending_date: '2019-02-02',
    },
    {
      proj_no: 112,
      proj_name: 'Project_112',
      starting_date: '2019-02-02',
      ending_date: '2019-03-03',
    },
    {
      proj_no: 113,
      proj_name: 'Project_113',
      starting_date: '2019-03-03',
      ending_date: '2019-04-04',
    },
    {
      proj_no: 114,
      proj_name: 'Project_114',
      starting_date: '2019-04-04',
      ending_date: '2019-05-05',
    },
    {
      proj_no: 115,
      proj_name: 'Project_115',
      starting_date: '2019-05-05',
      ending_date: '2019-06-06',
    },
    {
      proj_no: 116,
      proj_name: 'Project_116',
      starting_date: '2020-06-06',
      ending_date: '2020-07-07',
    },
    {
      proj_no: 117,
      proj_name: 'Project_117',
      starting_date: '2020-07-07',
      ending_date: '2020-08-08',
    },
    {
      proj_no: 118,
      proj_name: 'Project_118',
      starting_date: '2020-08-08',
      ending_date: '2020-09-09',
    },
    {
      proj_no: 119,
      proj_name: 'Project_119',
      starting_date: '2020-09-09',
      ending_date: '2020-10-10',
    },
    {
      proj_no: 120,
      proj_name: 'Project_120',
      starting_date: '2020-10-10',
      ending_date: '2020-11-11',
    },
  ],
};

module.exports = tables;
