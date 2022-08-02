import mysql from "mysql2";
import dbConfig from "../config/db.config.js";
// let response = {};
// async function fetchDbconfig() {
//   const response = await fetch("../config/db.config.json")
//   return response.config;
// }
// const dbConfig = import "../config/db.config.js";
// dbConfig = await fetchDbconfig();
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.\n");
});
export default connection;
