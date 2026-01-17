const cluster = require('cluster')
const os = require('os')
const express = require('express')

const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`)
    console.log(`Forking ${numCPUs} workers...\n`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    // Restart worker if it crashes
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`)
        cluster.fork()
    })
} else {
    const app = express()

    app.get('/', (req, res) => {
        res.send(`Handled by worker ${process.pid}`)
    })

    app.get('/crash', (req, res) => {
        process.exit(1) // simulate crash
    })

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started on port 3000`)
    })
}
