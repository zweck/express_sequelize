const express = require('express')
const sequelizeRouter = require('sequelize-router')

const db = require('../db')
const {
  User
} = require('../models')

const app = express()

app.use('/api', sequelizeRouter(User))
app.listen(8080)
