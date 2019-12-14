'use strict';

const queries = {
  dropDBCompany: `DROP DATABASE IF EXISTS company`,
  createDBCompany: 'CREATE DATABASE IF NOT EXISTS company',
  useCompany: 'USE company',
  createEmpTable:
    'CREATE TABLE IF NOT EXISTS Employees (emp_no int, emp_name varchar(25), salary float, reports_to text)',
  createDeptTable:
    'CREATE TABLE IF NOT EXISTS Departments (dept_no int, dept_name varchar(25),manager varchar(25))',
  createProjTable:
    'CREATE TABLE IF NOT EXISTS Projects (proj_no int, proj_name varchar(25), starting_date date, ending_date date)',
};

module.exports = queries;
