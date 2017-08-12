const connectToPSQL = require('./dbConnection');

// you can alter this file to create a table and then use the fs module to
// populate the database with all the food info you have. I would recommend
// trying to do it even if your data isnt right cause it's a good exercise
// and you can always rerun this since it will drop the food table and create
// it fresh every time

const insertQuery = `
  DROP TABLE IF EXISTS foods;
  CREATE TABLE foods (
    name        varchar(40) NOT NULL,
    calories    integer NOT NULL
  );

  INSERT INTO foods VALUES ('Bananas', 105);
`;

function insertData(client) {
  return new Promise((resolve, reject) => {
    client.query(insertQuery, [], (err, result) => {
      if (err) return reject(err);
      resolve({ client: client, result: result });
    });
  });
}

connectToPSQL()
  .then(insertData)
  .then(result => {
    console.log('finished inserting');
    result.client.end();
  })
  .catch(err => console.log(err));
