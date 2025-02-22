class apteka {
    name = "test"
    lekars = []
    cost = []
    sum_cost = 0
    constructor(name) {
    this.name = name 
   
    }

    add_lekarstv(name_lek, cost_lek){
    this.lekars.push(name_lek)
    this.cost.push(cost_lek) 
    }

    fullinfo(){
    for (let index = 0; index < test.lekars.length || index < test.cost.length; index++) {
        console.log("Лекарство - " + test.lekars[index] + ", Его цена - " + test.cost[index])
        
    }
    document.getElementById("text").textContent = "Аптека - " + test.name
    document.getElementById("yum").textContent = "Лучшие лекарства - " + test.lekars
    document.getElementById("cost").textContent = "Их цены " + test.cost
    }
    sum() {
    for (let a = 0; a < test.lekars.length; a++) {
        sum_cost += test.cost[a]
        document.getElementById("cost").textContent = "Для покупки всех нужно иметь " + test.sum_cost + " рублей"
    }
    }
}
let test = new apteka("Апельсин")
test.add_lekarstv("Отгероя",  129)
test.add_lekarstv("каклучше",  99)
test.add_lekarstv("дешевый", 999)
console.log(test)
test.sum()