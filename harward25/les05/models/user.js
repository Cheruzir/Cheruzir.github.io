class user {
    id = 0
    name = ""
    secondname = ""
    phone = "8800553535"
    gmail = ""
    town = ""
    constructor (id,name,secondname,phone,gmail,town){
    this.id = id
    this.name = name
    this.secondname = secondname
    this.phone = phone
    this.gmail = gmail
    this.town = town
    }
    toCSV() {
        return $(this.id), $(this.name), $(this.secondname), $(this.phone), $(this.gmail), $(this.town)
    }
    toJSON() {
        return {
        id: this.id,
        name: this.name,
        secondname: this.secondname,
        phone: this.phone,
        gmail: this.gmail,
        town: this.town
        }
    }
}