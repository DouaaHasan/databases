'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../dbConnction');

// require files
const {
  getAllDeptNumbsAndAllEmployeesNumbsAccordingly,
  sumSalaries,
  averageSalaries,
  sumSalariesPerDept,
  minAndMaxSalariesPerDept,
  salaryAndMatchingEmpNo,
} = require('./queries');

const execQuery = util.promisify(db.query.bind(db));

const createAndSeed = async () => {
  db.connect();

  try {
    await execQuery(getAllDeptNumbsAndAllEmployeesNumbsAccordingly);
    await execQuery(sumSalaries);
    await execQuery(averageSalaries);
    await execQuery(sumSalariesPerDept);
    await execQuery(minAndMaxSalariesPerDept);
    await execQuery(salaryAndMatchingEmpNo);
  } catch (error) {
    console.error(error);
  }
  db.end();
};

createAndSeed();
