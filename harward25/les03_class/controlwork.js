class car{
    maxspeed = 60
    color = "red"
    sell = -1
    fuel = -1
    constructor (maxspeed, color, sell, fuel){
    this.maxspeed = maxspeed
    this.color = color
    this.sell = sell
    this.fuel = fuel
    }
    zapravka() {
    this.fuel -=30
    }
    zapravochka() {
        this.fuel +=30
    }
}
let bad_car = new car(70, "Крассная", 120000, 35)
let good_car = new car(140, "Фиолетовая", 1000000, 80)
function show() {
    console.log("Машина 1: Макс. Скорость - " + bad_car.maxspeed + ", Цвет - " + bad_car.color + ", Стоимость - " + bad_car.sell + ", Бак бензина - "+ bad_car.fuel)
    bad_car.zapravka()
    console.log("У машины сейчас " + bad_car.fuel)
    bad_car.zapravochka()
    console.log("У машины сейчас " + bad_car.fuel)
}