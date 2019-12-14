'use strict';

const mysql = require('mysql');
const util = require('util');

const { employees, departments, projects } = require('./tables');
const {
  dropDB,
  createDB,
  useCompany,
  createEmpTable,
  createDeptTable,
  createProjTable,
} = require('./queries');

// connection options
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'userdb',
});

const execQuery = util.promisify(connection.query.bind(connection));

const createAndSeedDB = async () => {
  connection.connect();

  try {
    // create tables
    await execQuery(dropDB);
    await execQuery(createDB);
    await execQuery(useCompany);
    await execQuery(createEmpTable);
    await execQuery(createDeptTable);
    await execQuery(createProjTable);

    // employees insertions
    employees.forEach(async employee => {
      await execQuery('INSERT INTO employees SET ?', employee);
    });

    // departments insertions
    departments.forEach(async dept => {
      await execQuery('INSERT INTO departments SET ?', dept);
    });

    // projects insertions
    projects.forEach(async proj => {
      await execQuery('INSERT INTO projects SET ?', proj);
    });
  } catch (error) {
    console.error(error);
  }

  connection.end();
};

createAndSeedDB();
