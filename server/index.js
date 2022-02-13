const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// include mysql module
var mysql = require('mysql');

// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "root",    // user name to your mysql database
  password: "FILL IN YOUR PASSWORD", // corresponding password
  database: "test" // use the specified database
});

// make to connection to the database.
// con.connect(function(err) {
//   if (err) throw err;
//   // if connection is successful
//   con.query("INSERT INTO users (name, email) VALUES ('Anisha','anisha2003@gmail.com')", function (err, result, fields) {
//     // if any error while executing above query, throw error
//     if (err) throw err;
//     // if there is no error, you have the result
//     console.log(result);
//   });
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req, res) => {

  const detail_name = req.body.detail_name
  const detail_email = req.body.detail_email
  const detail_year = req.body.detail_year
  const detail_gender = req.body.detail_gender
  const detail_language = req.body.detail_language
  const detail_doYouSmoke = req.body.detail_doYouSmoke
  const detail_smokingRoommate = req.body.detail_smokingRoommate

  const sqlInsert = "INSERT INTO credentials (email, name) VALUES (?,?)"
  con.query(sqlInsert, [detail_email, detail_name], (err, result) => {
    console.log(result)
  })

  // insert into personalDetails
  const sqlInsert2 = "INSERT INTO personalDetails (email, details) VALUES (?,?)"
  con.query(sqlInsert2, [detail_email, detail_year], (err, result) => {
    console.log(result)
  })
  const sqlInsert3 = "INSERT INTO personalDetails (email, details) VALUES (?,?)"
  con.query(sqlInsert3, [detail_email, detail_gender], (err, result) => {
    console.log(result)
  })
  const sqlInsert4 = "INSERT INTO personalDetails (email, details) VALUES (?,?)"
  con.query(sqlInsert4, [detail_email, detail_language], (err, result) => {
    console.log(result)
  })
  const sqlInsert5 = "INSERT INTO personalDetails (email, details) VALUES (?,?)"
  con.query(sqlInsert5, [detail_email, detail_doYouSmoke], (err, result) => {
    console.log(result)
  })

  // insert into preferences
  const sqlInsert6 = "INSERT INTO preferences (email, preference) VALUES (?,?)"
  con.query(sqlInsert6, [detail_email, detail_year], (err, result) => {
    console.log(result)
  })
  const sqlInsert7 = "INSERT INTO preferences (email, preference) VALUES (?,?)"
  con.query(sqlInsert7, [detail_email, detail_gender], (err, result) => {
    console.log(result)
  })
  const sqlInsert8 = "INSERT INTO preferences (email, preference) VALUES (?,?)"
  con.query(sqlInsert8, [detail_email, detail_language], (err, result) => {
    console.log(result)
  })
  const sqlInsert9 = "INSERT INTO preferences (email, preference) VALUES (?,?)"
  con.query(sqlInsert9, [detail_email, detail_smokingRoommate], (err, result) => {
    console.log(result)
  })
})

app.listen(3001, () => {
    console.log('running on port 3001')
});

