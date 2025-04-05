
let a = [1, 4, 2, 4, 1]
let k = 2


/**
 * Этот комментарий для обьектов (То есть, когда ты наводишь на них курсором мыши) и это будет видно
 * @param {*} x
 * @param {*} m 
 */
function number_arr(x, m) {
    for (let i = 0; i < a.length; i++) {
        a[i]+=a[k]
    }
    console.log(a)
    }
function Random_gender(max) {
    return Math.floor(Math.random() * max);
}
number_arr(a, k)

function sum_arr(argument) {
    let s = 0
    for (let i = 0; i < argument.length; i++) {
        s+=argument[i]
    }
    return s
}

console.log(sum_arr([Random_gender(2),Random_gender(2),Random_gender(2)]))


/* 2 задача */
let cor = []
function zadach() {
    console.log(a)
    for (let o = 0; o < a.length; o++) {
        for (let y= 0; y < a.length; y++) {
            if (a[y] == a[o+1] && a[o] != a[y]) {
                cor.push(a[y])
            }
        }
    }
}
console.log(cor)
/* Pflfxf #3*/