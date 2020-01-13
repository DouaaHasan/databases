'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../connection');
const useCompanyDB = `use company`;

const execQuery = util.promisify(db.query.bind(db));

const flatify = async (dept_no, emp_no) => {
  // make (emp_no) a manager for the department (dept_no)
  const updateEmployees = `update employees set reports_to = ${emp_no} where emp_no = ${emp_no}`;
  const updateDepartments = `update departments set manager = ${emp_no} where dept_no = ${dept_no}`;

  db.connect();

  try {
    await execQuery(useCompanyDB);
    await execQuery(`START TRANSACTION`);
    await execQuery(updateEmployees);
    await execQuery(updateDepartments);
    await execQuery('COMMIT');
  } catch (error) {
    console.error(error);
    await execQuery('ROLLBACK');
  }
  db.end();
};

flatify(16, 2);
