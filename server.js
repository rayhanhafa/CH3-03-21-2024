
require('dotenv/config') //panggil env
const mongoose = require('mongoose')
const app = require("./app");

const PORT = process.env.PORT; //panggil env yang tidak igin terlihat

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  }).then(con => {
    console.log('conncetion to database success')
    //console.log(con.connections)
  })

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});