const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { verifyToken } = require('./middlewares/authorization')
require('dotenv').config()
const sequelize = require('./models').sequelize

sequelize.sync()

var userAuthRouter = require('./routes/userAuth')

app.use(bodyParser.json())
app.use(cors())
app.use('/api/auth',userAuthRouter)

app.listen(process.env.Server_Port, () => console.log('Server is running port 2222'))