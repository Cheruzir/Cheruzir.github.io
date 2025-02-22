const fs = require("fs")
const path = require("path")
const User = require("./models/User")
const Auto = require("./models/Auto")
const Owner = require("./models/Owner")
const users = [
    new user(1, "Олег", "Неолегович", "80128193213213213", "thekrutoyoleg@negmail.com", "Питер"),
    new user(2, "Олег", "Неолегович", "80128193213213213", "thekrutoyoleg@negmail.com", "Великая нация русов")
]
const autos = [
    new auto(5, "лимузни", "collora", "Блю веиршон", "666вАД"),
    new auto(4, "фирфри", "fiesta", "Вэри гуд рэд виз притти озер колорс", "МРВЕАСT")
]
const owners = [
    new owner(1, 5, "?", "?"),
    new owner(2, 4, "01.01.1012", "03.08.2288")
]
function saveToCSV(data, filename) {
    const header = Object.keys(data[0].toJSON()).join(',')
    const rows = data.map(item => item.toCSV()).join('\n')
    const content = ${header}\n${rows}
}