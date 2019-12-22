'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../dbConnction');

// require data & queries from files
const departments = require('./data');
const {
  dropDepartmentTable,
  createDepartmentTable,
  insertDepartments,
  addDeptColumnToEmployee,
} = require('./queries');

const execQuery = util.promisify(db.query.bind(db));

const createAndSeed = async () => {
  db.connect();

  try {
    // Create table department
    await execQuery(dropDepartmentTable);
    await execQuery(createDepartmentTable);
    // table raws insertions
    departments.forEach(async dept => {
      await execQuery(insertDepartments, dept, error => {
        if (error) throw error;
      });
    });
    // add dept clmn to employee
    await execQuery(addDeptColumnToEmployee);
    // Each department can have some employees working there. / values insertions /
    let departmentIndex = 0;
    for (let i = 0; i < 20; i++) {
      if (i % 5 === 0 && i !== 0) departmentIndex++;
      await execQuery(
        `UPDATE Employee SET dept = ${
          departments[departmentIndex].dept_no
        } WHERE employee_no = ${i + 1}`,
      );
      console.log(`the dept ${departmentIndex} 's been inserted successfully`);
    }
  } catch (error) {
    console.error(error);
  }
  db.end();
};

createAndSeed();
