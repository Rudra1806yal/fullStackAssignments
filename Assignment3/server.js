// Create a CRUD application using MongoDB and Mongoose.

// * Create a Mongoose model for the data.
// * Implement all CRUD operations using MongoDB.
// * Test all APIs using Postman

import express from 'express'
import mongoose from './Database/mongodb.js'
import connectDb from './Database/mongodb.js'
import router from './routes/studentRoutes.js'

const app = express()

app.use(express.json())
app.use(router)

connectDb()

const port = 4000

app.listen(port, () => {
    console.log('Server has started on port: ', port)
})