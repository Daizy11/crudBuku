const mongoose = require("mongoose");
const app = require('./app')
const port = process.env.PORT || 3010;
const dotenv = require('dotenv'); //environtment is not related to express, so we make it outside of app.js

app.set('view engine','ejs')

dotenv.config({ path: './config.env' });
const db = process.env.DATABASE;
mongoose
  .connect(db, {
    useNewUrlParser: true, //its just some option in order to deal with deprecation warning
  })
  .then(() => console.log("Connection succesfull"));

app.listen(3010,() => {
    console.log(`App running on port ${port}`);
  })