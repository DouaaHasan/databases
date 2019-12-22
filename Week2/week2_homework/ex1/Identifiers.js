'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../dbConnction');

// require data & queries from files
const { employees, managers } = require('./data');
const {
  dropEmployeeTable,
  createEmployeeTable,
  insertEmployees,
  addManagerColumn,
  managerAsFK,
} = require('./queries');

const execQuery = util.promisify(db.query.bind(db));

const createAndSeed = async () => {
  db.connect();

  try {
    await execQuery(dropEmployeeTable);
    await execQuery(createEmployeeTable);
    // Insert 20 rows in this table,
    employees.forEach(async emp => {
      await execQuery(insertEmployees, emp, error => {
        if (error) throw error;
      });
    });
    await execQuery(addManagerColumn);
    // insert values into mngr clmn
    managers.forEach(async (mng, index) => {
      await execQuery(
        `UPDATE Employee SET manager = '${mng}' WHERE employee_no = ${index + 1}`,
        error => {
          if (error) throw error;
        },
      );
    });
    // update table add constraint fk
    await execQuery(managerAsFK);
  } catch (error) {
    console.error(error);
  }
  db.end();
};

createAndSeed();
