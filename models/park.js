const Park = function(name,ticket_price){
    this.name = name
    this.ticket_price = ticket_price
    this.dinosaurs = []
}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino)
}

Park.prototype.removeDino = function(){
    this.dinosaurs.pop()
}

module.exports = Park;