require('dotenv').config()
require('express-async-errors')
const cors =require('cors')
const cnx=require('./shared/dbConfig')
const express = require('express')
const urlRouter=require('./url/urlRouter')
const userRouter=require('./auth/authRouter');
const ContentRoute= require('./content/contentrouting')
const MenuRouter = require ('./menu/menuRouter');
const formLibreRouter = require('./formLibre/formLibreRouter')
const app =express()
app.use(express.json());
app.use(cors())
const port = process.env.PORT||4000


app.use('/api/v1/',userRouter);
app.use('/content',ContentRoute)
app.use('/menu',MenuRouter)
app.use('/libre',formLibreRouter)
app.use('/url',urlRouter)
const start = async () => {
    try {
      await cnx(process.env.URL);
      app.listen(port, () => {
        console.log(`connected to http://192.168.100.11:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start();