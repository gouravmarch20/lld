const { parentPort } = require('worker_threads')

parentPort.on('message', () => {
    let sum = 0

    // CPU-intensive task
    for (let i = 0; i < 5e8; i++) {
        sum += i
    }

    parentPort.postMessage({
        message: 'Heavy computation done',
        result: sum
    })
})
