const express = require('express')
const server = express()

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./quiz.db", sqlite3.OPEN_READWRITE, (err)=>{
if (err) return console.error(err.message);

console.log("connection successful")
});

const sql = 'SELECT * FROM users';

server.use(express.static('public'))
server.use(express.urlencoded())
server.use(express.json())


server.post('/saveScore', (request, response) => {
  console.log('hej');
  const score = request.body.userScore
  const first_name = request.body.firstname
  console.log(request.body);
  /*const sql = `
      INSERT INTO users(first_name, score)
      VALUES('${first_name}', ${score})
    `;
    db.run(sql, (err) => {
      if(err)throw err
      console.log('saved');
      
    })*/
})
/*db.all(sql,[],(err,rows)=>{
    if (err) return console.error(err.message);

    rows.forEach((row)=>{
        console.log(row);
    });
});
*/
server.listen(3000)