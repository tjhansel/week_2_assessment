// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


for(i=0; i<array.length; i++){
    for( z=i+1; z<array.length; z++){
    }
    let numI = array[i]
    let numZ = array[z]
    if  (numI+numZ === numI+numZ) {
        console.log(`True: ${i} and ${z} equal zero.`)
    }
    else (console.log(`False: ${i} and ${z} do not equal zero`))
}