const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors');
app.use(cors())

app.get('/user_details', (req,res) => {
    res.sendFile(path.join(__dirname, 'data.json'))
})

app.get('/user_skills', (req,res) => {
    res.sendFile(path.join(__dirname, 'data1.json'))
})

app.listen(port, () => {
    console.log(`Server listened on http://localhost:${port}`)
})