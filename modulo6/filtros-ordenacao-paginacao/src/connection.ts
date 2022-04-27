import knex from "knex";

const connection = knex({
client:"mysql",
connection: {
    host:"",
    port:3306,
    user:"",
    password:"",
    database:"",
    multipleStatements: true
  }
})
 
export default connection


