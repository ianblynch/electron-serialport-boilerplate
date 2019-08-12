
let frames = 1024
let numOfFrames = 65535
let outerArray = new Array(1024)

for (let h = 0; h < frames; h++) {
    let buffer = new ArrayBuffer(65535)
    let int8View = new Int8Array(buffer)

    //creating html display for each outerArray
    let el = document.querySelector('#data-frames')
    let newDivEl = document.createElement('div')
    el.appendChild(newDivEl)
    let newHeaderEl = document.createElement('p')
    let newRawDataEl = document.createElement('p')
    newHeaderEl.appendChild(document.createTextNode('dataFrame #' + h))
    newDivEl.appendChild(newHeaderEl)
    newDivEl.appendChild(newRawDataEl)
    newRawDataEl.appendChild(document.createTextNode(''))


    //create 65535 values 1-8 per array
    for (let i= 0; i < int8View.length; i++) {
        int8View[i] = Math.floor(Math.random()*8)
    }

    //append last 8 values to html
    for ( let j=0; j < 8; j++) {
        newRawDataEl.append(int8View[j])
    }
    outerArray[h] = buffer
}
let finalView = new Int8Array(outerArray[frames - 1])
console.log(finalView)
console.log(finalView[numOfFrames - 1])

// let numPerGroup = 50
// let numOfGroupings = Math.ceil(frames / numPerGroup)
// let numInLastGroup = frames % numPerGroup

// let currentWide = 0
// for (i = 0; i < numOfGroupings; i++) {
// var data
// }
// function makeDataArraysByIncrement(numPerGroup) {
//     let nameString = 'dataFrames' + currentWide
//     let i 
//     for (i = 0; i <numPerGroup; i++) {
//         data[nameString][i] = new Array(numOfFrames)
//         let j
//         for (j = 0; j < data[nameString][i].length; j++) {
//             data[nameString][i][j] = "i = " + i + ", j = " + j
//         }
//     }
// }
// function callMDABIAndIncrementWide() {
//     if (currentWide <= numOfGroupings) {
//         if (currentWide === numOfGroupings) {
//             makeDataArraysByIncrement(numInLastGroup)
//         } else {
//             makeDataArraysByIncrement(numPerGroup)
//         }
//     }
//     currentWide++
// }
// console.log(currentWide)
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()
// callMDABIAndIncrementWide()

// console.log(currentWide)
// console.log(dataFrames)