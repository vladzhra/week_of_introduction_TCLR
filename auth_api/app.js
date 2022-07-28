import express from "express";
import connection from "./models/db.js";
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login-api', (req, res) => {
  console.log(req.query);
  let username = req.query.username
  let password = req.query.password
  console.log(username, password);
  function findById(username, password, result) {
    connection.query(`SELECT * FROM tutorials WHERE (title = ?) AND (description = ?)`, [username, password], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(0);
        return;
      }
      if (res.length) {
        console.log("found tutorial: ", res[0]);
        result(1);
        return;
      }
      result(0);
    });
  }
  findById(username, password, (err, data) => {
    if (err == 0)
      res.send({isAuthenticated: false});
    else
      res.send({isAuthenticated: true});
  });
});

app.get('/register-api', (req, res) => {
  username = req.query.username
  password = req.query.password
  console.log(username);
  function register(username, password, result) {
    connection.query(`CREATE TABLE IF NOT EXISTS tutorials (
      id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
      title varchar(255) NOT NULL,
      description varchar(255),
      published BOOLEAN DEFAULT false
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8`, (err) => {
      if (err) {
        console.log("error: ", err);
        result(0);
        return;
      }
    });
    connection.query(`INSERT INTO tutorials (title, description, published) VALUES (?, ?, false)`, [username, password], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(0);
        return;
      }
      if (res.length) {
        console.log("create tutorial: ", res[0]);
        result(1);
        return;
      }
      result(0);
    });
  }
  register(username, password, (err, data) => {
    if (err == 0)
      res.send({isAuthenticated: false});
    else
      res.send({isAuthenticated: true});
  });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
