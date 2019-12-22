'use strict';

const queries = {
  dropDepartmentTable: `DROP TABLE IF EXISTS Department`,
  createDepartmentTable: `CREATE TABLE IF NOT EXISTS  Department (
    dept_no INT PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(225),
    address VARCHAR(225)
    )`,
  insertDepartments: `INSERT INTO Department SET ?`,
  addDeptColumnToEmployee: `ALTER TABLE Employee ADD dept INT`,
};

module.exports = queries;
