'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../dbConnction');

// require data & queries from files
const { managersNames } = require('./data');
const {
  dropMngrFullNameClmn,
  addManagersFullName,
  getAllEmployeesAndTheirManagers,
  getAllEmployeesAndAllDepartments,
} = require('./queries');

const execQuery = util.promisify(db.query.bind(db));

const createAndSeed = async () => {
  db.connect();

  try {
    // to avoid duplication error
    await execQuery(dropMngrFullNameClmn);
    // add clmn
    await execQuery(addManagersFullName);
    // values insertions
    managersNames.forEach(async (name, index) => {
      await execQuery(
        `UPDATE Employee SET manager_fullName = '${name}' WHERE manager = ${index + 1}`,
        error => {
          if (error) throw error;
        },
      );
    });
    await execQuery(getAllEmployeesAndTheirManagers);
    await execQuery(getAllEmployeesAndAllDepartments);
  } catch (error) {
    console.error(error);
  }
  db.end();
};

createAndSeed();
