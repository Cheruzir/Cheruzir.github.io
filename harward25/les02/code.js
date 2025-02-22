let our_arr = [[5, 12, 9], [14, 8, 18], [21, 24, 7]]
let arr = []
let set = 0
const isEven = number => number % 2 === 0 // Если число делиться на 2 и остаток 0 (Что-то вроде функции)
const isEvenonthree = number => number % 3 === 0 // Если число делиться на 2 и остаток 0 (Что-то вроде функции)
function findchest() {
    for (let index = 0; index < our_arr.length; index++) {
        for (let indexQ = 0; index < our_arr[index].length; indexQ++) {
            if (our_arr[index][indexQ] >= 10 && isEven(our_arr[index][indexQ])  && isEvenonthree(our_arr[index][indexQ])) {
                arr.push(our_arr[index][indexQ])
                console.log(our_arr[index][indexQ])
                }
        }
    }
    console.log("СОКРОВИЩА: " + arr)
    set++
}