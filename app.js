const express = require('express');
const app = express();
const morgan = require('morgan')

const announcementRoutes = require('./api/routes/announcements');
const newsLetterRoute = require('./api/routes/newsLetter')

app.use(morgan('dev'))
// router connections for routes file
app.use('/announcements', announcementRoutes)
app.use('/newsLetter', newsLetterRoute)

// const videoRoute = require('./a') 


module.exports = app;