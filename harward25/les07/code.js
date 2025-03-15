const express  = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000

// Подключение к базе данных MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'databasegibdd',
})

//ОЧЕНЬ ВАЖНАЯ ХРЕНЬ ПРО ОШИБКУ
connection.connect((err) =>{
 if (err) {
    console.error('Внимание, ошибка ', err)
    return
 }
 console.log('подключение прошкло успешно')
})
//Middleware для обработки JSON
app.use(expess.json())
