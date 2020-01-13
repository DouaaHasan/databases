'use strict';

// require modules, packages & dbConnection
const util = require('util');

// assuming that connection to the database is established and stored as conn
const execQuery = util.promisify(db.query.bind(conn));

const getPopulation = async (cityOrCountry, name, cb) => {
  const safeQuery = `SELECT Population FROM ? WHERE Name = ?`;
  const insertedDate = [cityOrCountry, name];

  conn.connect();
  try {
    await execQuery(safeQuery, insertedDate, (err, result) => {
      if (err) throw err;
      if (result.length == 0) cb(new Error('Not found'));
      cb(null, result[0].name);
    });
  } catch (error) {
    cb(error);
  }
  conn.end();
};
