import knex from "knex";

const connection = knex({
client:"mysql",
connection: {
    host:"35.226.146.116",
    port:3306,
    user:"419996-thayna-manoel",
    password:"twEj$49hXDPCh#@22qvS",
    database:"joy-419996-thayna-manoel",
    multipleStatements: true
  }
})
 
export default connection


