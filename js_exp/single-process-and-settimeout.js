/**
 * Read the following code and consider what the output would be. 
 * 
 * The run ndoe <filename>.js and see results 
 */

function log(event) {
    console.log(`[${ new Date().toLocaleString()}] ${event}`);
}

/**
 * This is to simulate a I/O bound operation, in an non blocking fashion. That is
 * the function start a I/O operation with a callback, the the h/w responsbile for such 
 */
function doSomeIoBoundOperation(milliSecond) {
    log(`Start some I/O bound operation, which will finish in ${milliSecond / 1000} seconds.`)
    setTimeout(function doSomeWork() {
        log('I/O bound operation finishes, and callback invoked.');
    }, milliSecond);
}

/**
 * This is to simulate a CPU bound work which keeps the CPU busy for a while. 
 * 
 * when the CPU is busy, all other instruction is queued up for later, including the instruction 
 * to do the schedule work
 */
function doSomeCpuBoundOperation(milliSecond) {
    const start = new Date();

    log('Occupying CPU starts.')
    for(var i = 0; new Date().getTime() < start.getTime() + milliSecond; ++i);
    log('Occupying CPU ends.')
}


doSomeIoBoundOperation(1000);
doSomeCpuBoundOperation(4000);
