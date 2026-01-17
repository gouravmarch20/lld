const { Worker } = require('worker_threads')
const path = require('path')

function runWorker(workerFile) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(
            path.resolve(workerFile)
        )

        worker.postMessage('start')

        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker exited with code ${code}`))
            }
        })
    })
}

module.exports = runWorker
