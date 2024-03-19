require('dotenv/config') //panggil env
const mongoose = require('mongoose')
const app = require("./app");

const PORT = process.env.PORT; //panggil env yang tidak igin terlihat

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  }).then(con => {
    console.log('conncetion to database succes')
    //console.log(con.connections)
  })

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty']
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default: 'Indonesia',
  },

})

const Customer = mongoose.model('Customer', customerSchema)

const customerTest = new Customer({
  name: 'Ronaldo',
  email: 'Ronaldo@gmail.com',
  phoneNumber: '88872828282828',

})

customerTest
  .save()
  .then(doc => {
    console.log(doc)
  })
  .catch((err) => {
    console.log("ERROR : " + err)
  })

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});