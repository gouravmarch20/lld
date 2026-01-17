const express = require('express')
const path = require('path')
const runWorker = require('../utils/runWorker')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await runWorker(
            path.join(__dirname, '../workers/heavy.worker.js')
        )

        res.json({
            success: true,
            data: result,
            workerHandled: true
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

module.exports = router
