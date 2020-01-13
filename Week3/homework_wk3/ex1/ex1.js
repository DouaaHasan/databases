'use strict';

// require modules, packages & dbConnection
const { util, db } = require('../connection');

// mocking data
const skills = [
  { emp: 1, skill: 'one' },
  { emp: 2, skill: 'two' },
  { emp: 3, skill: 'three' },
  { emp: 4, skill: 'four' },
  { emp: 5, skill: 'five' },
  { emp: 6, skill: 'six' },
  { emp: 7, skill: 'seven' },
  { emp: 8, skill: 'eight' },
  { emp: 9, skill: 'nine' },
  { emp: 10, skill: 'ten' },
];

// queries
const useCompanyDB = `use company`;
const dropSkillTable = `drop table if exists skills`;
const createSkillTable = `create table skills (skill varchar(100), emp int, FOREIGN KEY (emp) REFERENCES employees(emp_no));`;

const execQuery = util.promisify(db.query.bind(db));

const createAndSeedSkills = async () => {
  db.connect();

  try {
    await execQuery(useCompanyDB);
    await execQuery(dropSkillTable);
    await execQuery(createSkillTable);
    skills.forEach(async skill => {
      await execQuery(`insert into skills set ?`, skill);
    });
    console.log('done...');
  } catch (error) {
    console.error(error);
  }

  db.end();
};

createAndSeedSkills();
