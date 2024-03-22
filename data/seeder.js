require('dotenv/config') //panggil env
const mongoose = require('mongoose')
const fs = require('fs')
const Customer = require('../models/customerModel')
const { error } = require('console')

const DB = process.env.DATABASE

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    }).then(con => {
        console.log('conncetion to database success')
        //console.log(con.connections)
    })

const customers = JSON.parse(fs.readFileSync("./data/customers.json", 'utf-8'))

const importData = async () => {
    try {
        await Customer.create(customers)
        console.log("data suskses di import")
    } catch (err) {
        console.log(err)
    }
    process.exit();
}

const clearData = async () => {
    try {
        await Customer.deleteMany()
        console.log("data sukses di clear")
    } catch (err) {
        console.log(err)
    }
    process.exit();
}

if (process.argv[2] == "--import") {
    importData()
}
else if (process.argv[2] == "--delete") {
    clearData()
}