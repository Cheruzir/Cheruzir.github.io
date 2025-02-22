class student {
    name = "ok"
    familia = "shit"
    klass = "7Ы"
    vozvrast = 12

    // Метод - задает начальные значения экземпляра класса
    constructor(name, familia, klass, vozvrast){ // в скобках ФОРМАЛЬНЫЕ параметры 
    this.name = name
    this.familia = familia
    this.klass = "1" // <- если указанно, то оно ВСЕГДА БУДЕТ ТАКИМ
    this.vozvrast = vozvrast
    this.kazah = 25
    }
    changekazah() { // ЭТО ФУНКЦИЯ
        this.kazah +=1
    }
}
class School_procces extends student{ // Расширяем класс студента
    School_result = false // добавляя успеваемость
    constructor (name, familia, klass, vozvrast,School_result){
        super(name, familia, klass, vozvrast) // Переносит выбранные параметры ИЗ СТУДЕНТА
        this.School_result = School_result
    }
    changekazah() {
        if (this.School_result) {
            this.School_result =+1
            
        }
        else {
            console.log("Ты долбоеб")
        }
    }

}
let arseniy_student = new student("Арсений", "Зайцев", 10, 12) // 10 - НЕ УЧИТЫВАЕТСЯ!
let sasha = new student("Лох", "имбицилов", "-1", -1212)
let arr = [sasha, arseniy_student]
let ars_school = new School_procces("Арсений", "Зайцев", 10, 12, false )
function AWW() {

console.log(arseniy_student)

console.log(arr)
// Перебирает массив (список) и выводим КАЖДЫЙ элемент (Что-то вроде for)
arr.forEach(element =>{
    console.log(element.familia + " ЯВЛЯЕСТЯ КАЗАХОМ НА " + element.kazah)
})


ars_school.changekazah()
arseniy_student.changekazah()


arr.forEach(element =>{
    console.log(element.familia + " ЯВЛЯЕСТЯ КАЗАХОМ НА " + element.kazah)
})
}
