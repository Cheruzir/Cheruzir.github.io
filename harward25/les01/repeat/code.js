let arr = [1023,1231,657,213,0,12,321,9090]
let best = -69
let before = -69
let worst = 9999999999999999999999999999999
function test() {
    for (let index = -1; index < arr.length; index++) {
        if(arr[index] < arr[index+1]){
        before = arr[index+1]
        arr[index+1] = arr[index]
        arr[index] = before
        }
        if(best > arr[index]){
        best = arr[index]
        }
        if(worst < arr[index]){
        worst = arr[index]
        }
        
        if (best != arr[arr.length] && arr[index] == arr[arr.length]|| worst != arr[arr.length-arr.length] && arr[index] == arr[arr.length]){
        index=-1
        }
        console.log(arr)
    }
    console.log(arr)
}