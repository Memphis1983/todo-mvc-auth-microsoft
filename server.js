// !import all necessary node packages

//node framework which provides features for web applications 
const express = require('express') 

// creates a new express server 
const app = express() 

// connects to our DB
const mongoose = require('mongoose') 

// authentication middleware that helps add authenticaton (username and password)
const passport = require('passport') 

 // creates a session middleware, Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
const session = require('express-session')

//MongoDB session store for Connect and Express written in Typescript
const MongoStore = require('connect-mongo')(session) 

//Our DB connection config imported from config/config.js
const connectDB = require('./config/database') 

// Our authentication routes setup in routes/auth
const authRoutes = require('./routes/auth') 

// Our home/get routes 
const homeRoutes = require('./routes/home')  

// Our get/post/put/delete routes
const todoRoutes = require('./routes/todos') 

// initializing our environment variables from the mentioned path 
require('dotenv').config({path: './config/.env'})


// Passport config
require('./config/passport')(passport)

// connecting to our DB (function is being called)
connectDB()

// ! add & configure middleware:
// This defines where to look for our view files and configures the view engine as ejs
app.set('view engine', 'ejs')
// Serving static files, Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware.
app.use(express.static('public'))
// express middleware for parsing json objects, this below one parse data comes from HTML form
app.use(express.urlencoded({ extended: true }))
//  also can parse data like text and json
app.use(express.json())

// !Sessions 
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

  
// !Passport middleware | Each app.use(middleware) is called every time a request is sent to the server.
app.use(passport.initialize())
app.use(passport.session())

// !initializing routes from routes/ path
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

// !Server running  
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
