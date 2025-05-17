let arr = [2, 1, 5, 3, 12] //let arr = [RT(101), RT(101), RT(101), RT(101), RT(101)]
let min = []
let min_ch = []
function RT(max) {
    return Math.floor(Math.random() * max -50);
}
function Randim() {
    arr[0] = RT(101)
    arr[1] = RT(101)
    arr[2] = RT(101)
    arr[3] = RT(101)
    arr[4] = RT(101)
    document.getElementById("text").textContent = "Данный массив: " + arr
    min = []
    min_ch = []
}
function Minimum() {
    min = []
    min_ch = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] > arr[i] && arr[i] < arr[i+1]) {
            if (arr[i-1] == -51 || arr[i+1] == -51) {
                
            }
            else{
                min_ch.push(i)
                min.push(arr[i]**3)
            }
        }
    }
    console.log(arr + " ")
    console.log(min)
    document.getElementById("answer").textContent = "Локальные минимумы: " + min + "; Их счет по списку: " + min_ch + " (по программной логике!)"
}
/*
Эта отдельная функция если надо

function exit() {
    console.log(arr + " ")
    console.log(min)
    document.getElementById("answer").textContent = "Локальные минимумы: " + min + "; Их счет по списку: " + min_ch
}
*/