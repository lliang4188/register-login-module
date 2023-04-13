const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
  console.log('Server is runing on port')
})

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '123456',
  database: 'plantdb'
})

app.post('/register', (req, res) => {
  const sendEmail = req.body.Email
  const sendUserName = req.body.UserName
  const sendPassword = req.body.Password  
  
  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'

  const Values = [sendEmail, sendUserName, sendPassword]

  db.query(SQL, Values, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      console.log('User inserted successfully!')
      res.send({ message: 'User added!' })
    }
  })
})


app.post('/login', (req, res) => {
  const sendUserName = req.body.UserName
  const sendPassword = req.body.Password

  const SQL = 'SELECT * FROM users WHERE username = ? && password = ? '

  const Values = [sendUserName, sendPassword]

  db.query(SQL, Values, (err, result ) => {
    if (err) {
      res.send({ error:err })
    }
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send({ message: "Credentials Dont't match!"})
    }
  })

})