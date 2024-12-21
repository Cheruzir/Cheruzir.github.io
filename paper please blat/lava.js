let arr=[3,1,2,6,9,0,4,7,5,8]
let a = -1
function morbintime() {
    for (let index = -1; arr[0]!=0; index++) {
        if (arr[index] < arr[index+1]) {
            a = arr[index]
            arr[index] = arr[index+1]
            arr[index+1] = a
            console.log(arr)
        }
        if(index==9){
        index= -1
        }
    }
    console.log(arr)
}