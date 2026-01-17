const express = require('express')
const heavyRoute = require('../src/routes/heavy.route')

const app = express()
const PORT = 3000

app.use('/heavy', heavyRoute)

app.get('/health', (req, res) => {
    res.json({ status: 'OK', pid: process.pid })
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})
