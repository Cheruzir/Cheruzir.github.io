let arr = []
let best = -999
let worst = 999
let before = 1
function random(max) {
    return Math.floor(Math.random() * max); // Для меня - чайника
}
function findchest() {
    for (let index = 0; index < 999999999999; index++) {
    arr.push(random(11))    
    console.log(arr[index])
    }

    console.log(arr)
}