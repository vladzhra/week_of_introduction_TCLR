import express from "express";
import connection from "./models/db.js";
import util from "util";
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

app.get('/login-api', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  console.log(username, password);
   function findById(username, password) {
    try {
      const result = connection.query(`SELECT * FROM tutorials WHERE (title = ?) AND (description = ?)`, [username, password]);
      console.log(result.found);
      if (result.found == undefined) {
        console.log("error: ", err);
        return 0;
      } else {
        console.log("found : ", res[0]);
        return 1;
      }
    } catch (err) {
      return 0;
    }
  }
  // const task_findby = util.promisify(connection.query);
  const SQL = async function(query, args) {
    return new Promise((resolve, reject) => {
      connection.query(query, args, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });
  }
  try {
    const result = await SQL(`SELECT * FROM tutorials WHERE (title = ?) AND (description = ?)`, [username, password]);
    console.log(result);
    if (result.length == 0) {
      res.send({isAuthenticated: false});
    } else {
      res.send({isAuthenticated: true});
    }
  } catch (err) {
    console.log("error: ", err);
  }

  // try {
  //   findById(username, password, (err, data) => {
  //   if (err == 0)
  //     res.send({isAuthenticated: false});
  //   else
  //     res.send({isAuthenticated: true});
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.send({isAuthenticated: false});
  // }
});

app.get('/register-api', (req, res) => {
  let username = req.query.username
  let password = req.query.password
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
  try {
    register(username, password, (err, data) => {
      if (err)
        res.send({isAuthenticated: false});
      else
        res.send({isAuthenticated: true});
    });
  } catch (err) {
    console.log(err);
    res.send({isAuthenticated: false});
  }
});

app.listen(port, () => {
    console.log(`\nApp listening on port ${port}`)
})
