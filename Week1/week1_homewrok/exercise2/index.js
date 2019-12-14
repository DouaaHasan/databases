'use strict';

const mysql = require('mysql');
const util = require('util');

const {
  countriesAbove8M,
  countriesContainsLand,
  citiesBetweenHalfMAnd1M,
  countriesInEurope,
  countriesBySurfaceArea,
  citiesInNL,
  populationRotterdam,
  top10CountriesBySurfaceArea,
  top10CitiesByPopulation,
  populationSum,
} = require('./queries');

// connection options
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world',
});

const execQuery = util.promisify(connection.query.bind(connection));

const selectQuery = async query => {
  connection.connect();

  try {
    switch (query) {
      // 1
      case countriesAbove8M:
      // 2
      case countriesContainsLand:
      // 3
      case citiesBetweenHalfMAnd1M:
      // 4
      case countriesInEurope:
      // 5
      case countriesBySurfaceArea:
      // 6
      case citiesInNL:
      // 8
      case top10CountriesBySurfaceArea:
      // 9
      case top10CitiesByPopulation:
        await execQuery(query, (error, results) => {
          if (error) throw error;
          if (results) results.forEach((res, index) => console.log(`${index + 1}) ${res.Name}`));
        });
        break;
      // 7
      case populationRotterdam:
        await execQuery(populationRotterdam, (error, results) => {
          if (error) throw error;
          console.log(`The population of Rotterdam City = ${results[0].Population}`);
        });
        break;
      // 10
      case populationSum:
        await execQuery(populationSum, (error, results) => {
          if (error) throw error;
          console.log(`The population of the world = ${results[0].SUM}`);
        });
        break;
      default:
        console.log('please insert a correct query');
    }
  } catch (error) {
    console.error(error);
  }
};

selectQuery(countriesAbove8M);
connection.end();
