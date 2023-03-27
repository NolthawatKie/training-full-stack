class Model {
    name = ""
    dob = ""
    rate = 0.0
    showDetail() {
        document.body.innerHTML += this.name + " " + this.dob + " " + this.rate + "<br>"
    }
}

var a = new Model()
var b = new Model 
b.name = "DDD"
b.dob = "2022-10-12"
b.rate = 5000.
b.showDetail()
