// Create a CRUD application using an array of student objects. Each student object should contain:

// * Name
// * Age
// * Gender

// Implement all CRUD operations and organize the backend code using the MVC (Model-View-Controller) architecture.

import express from 'express'
import router from './routes/studentRoutes.js'

const app = express()

app.use(express.json())
app.use(router)

const port = 4000

app.get("/", (req, res) => {
    res.send("Student CRUD API");
});

app.listen(port, () => {
    console.log('Server has started on port: ', port)
})