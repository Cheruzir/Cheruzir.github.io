class auto {
    id = 0
    mark = ""
    model = ""
    color = ""
    gosnum = ""
    constructor (id,mark,model,color,gosnum){
        this.id = id
        this.mark = mark
        this.model = model
        this.color = color
        this.gosnum = gosnum
        }
        toCSV() {
            return $(this.id), $(this.mark), $(this.model), $(this.color), $(this.gosnum)
        }
        toJSON() {
            return {
            id: this.id,
            mark: this.mark,
            model: this.model,
            color: this.color,
            gosnum: this.gosnum
            }
        }
}