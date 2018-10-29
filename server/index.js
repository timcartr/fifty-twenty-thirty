const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()
app.use(bodyParser.json())

//////// CONTROLLERS ////////
const CTRL = require('./controllers/db_controller')
const sessionCTRL = require('./controllers/session_controller')

//////// SESSION ///////
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(sessionCTRL.create)


/************* ENDPOINTS ***************/
app.get('/api/test', CTRL.get)

//////// MASSIVE ////////
massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}.`))
})