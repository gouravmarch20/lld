const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis').default
const { createClient } = require('../../workerThread/node_modules/redis/dist')

const app = express()

/* ---------------- REDIS SETUP ---------------- */

const redisClient = createClient({
    url: 'redis://localhost:6379'
})

redisClient.on('connect', () => {
    console.log(`🔴 Redis connected (worker ${process.pid})`)
})

redisClient.on('error', (err) => {
    console.error('Redis error:', err)
})

redisClient.connect()

const redisStore = new RedisStore({
    client: redisClient
}) 

/* ---------------- MIDDLEWARE ---------------- */

app.use(express.json())

app.use(
    session({
        store: redisStore,
        secret: 'cluster-secret',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    })
)

/* ---------------- ROUTES ---------------- */

// LOGIN
app.get('/login', (req, res) => {
    req.session.user = { id: 1, name: 'Gourav' }

    console.log(
        `🧠 SESSION SAVED | worker=${process.pid} | sessionID=${req.sessionID}`
    )

    res.json({
        message: 'Logged in',
        worker: process.pid,
        sessionID: req.sessionID
    })
})

// PROFILE
app.get('/profile', (req, res) => {
    console.log(
        `📥 SESSION READ | worker=${process.pid} | sessionID=${req.sessionID}`
    )

    res.json({
        user: req.session.user || null,
        worker: process.pid,
        sessionID: req.sessionID
    })
})

/* ---------------- HEAVY CPU TASK ---------------- */

app.get('/heavy', (req, res) => {
    console.log(`🔥 HEAVY TASK START | worker=${process.pid}`)

    // simulate CPU heavy task
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i
    }

    console.log(`✅ HEAVY TASK END | worker=${process.pid}`)

    res.json({
        result: sum,
        worker: process.pid
    })
})

/* ---------------- FALLBACK ---------------- */

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' })
})

module.exports = app
