let arr = [[4,3,2,3],[8,-3,-2,5],[-2,-2]]
let plus = []
let min = []
stopit = 0
function answer() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[[j]] > 0) {
            plus.push(arr[[j]])
            console.log("Положительный" + arr[[j]])
            }
            else if (arr[[j]] < 0) {
            min.push(arr[[j]])
            console.log("Отрицательный" + arr[[j]])
            }

        }
        if (plus.length == min.length && stopit==0) {
            console.log("Найден массив в матрице, это: " + arr[i])
            stopit++
        }
        else{
            plus.length = 0
            min.length = 0
        }
    }
}
answer()