'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../dbConnction');

// require data & queries from files
const { getAllEmployeesAndTheirManagers, getAllEmployeesAndAllDepartments } = require('./queries');

const execQuery = util.promisify(db.query.bind(db));

const createAndSeed = async () => {
  db.connect();

  try {
    await execQuery(getAllEmployeesAndTheirManagers);
    await execQuery(getAllEmployeesAndAllDepartments);
  } catch (error) {
    console.error(error);
  }
  db.end();
};

createAndSeed();
