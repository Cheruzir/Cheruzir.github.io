let arr=[29,18,90,17,58,63,107,11,34,0]
let a = -1
function morbintime() {
    for (let index = -1; arr[0]!=0; index++) {
        if (arr[index] > arr[index+1]) {
            a = arr[index+1]
            arr[index+1] = arr[index]
            arr[index] = a
            console.log(arr)
        }
        if(index==9){
        index= -1
        }
    }
    console.log(arr)
}