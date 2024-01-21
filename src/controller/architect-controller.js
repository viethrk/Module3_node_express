const connection = require("../config/db-config");

const getAllArchitect = () => {
  const query = "select * from architect";

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      resolve(results);
    });
  });

  return resultQuery;
};

const getArchitechById = (id) => {
  const query = "select * from architect where id = " + id;

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

  return resultQuery;
};

// add architect
const createAchitect = (architect) => {
  const { name, birthday, sex, place, address } = architect;
  const insertQuery = `INSERT INTO architect (name, birthday, sex, place, address) 
                        VALUES ('${name}', ${birthday}, ${sex}, '${place}', '${address}')`;

  const resultQuery = new Promise((resolve, reject) => {
    connection.query(insertQuery, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });

  return resultQuery;
};

// update

// delete

module.exports = { getAllArchitect, getArchitechById, createAchitect };
