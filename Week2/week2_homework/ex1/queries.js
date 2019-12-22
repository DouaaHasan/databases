'use strict';

const queries = {
  dropEmployeeTable: `DROP TABLE IF EXISTS Employee`,
  createEmployeeTable: `CREATE TABLE IF NOT EXISTS Employee (
  employee_no INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(50) NOT NULL,
  salary INT,
  address VARCHAR(225)
  )`,
  insertEmployees: `INSERT INTO Employee SET ?`,
  // dumpSqlFile: `mysqldump -u hyfuser -p userdb --events --triggers --routines > userdb_backup.sql`,
  addManagerColumn: `ALTER TABLE Employee ADD manager INT NOT NULL`,
  managerAsFK: `ALTER TABLE Employee ADD CONSTRAINT manager FOREIGN KEY(manager) REFERENCES Employee(employee_no)`,
};

module.exports = queries;
