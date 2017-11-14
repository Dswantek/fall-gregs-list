function AutosService() {

    // WHATS PRIVATE?
    // DUMMY DATA
    var autos = []

    var engines = [
        { id: 1, fuel: 'Gas', cylinders: 4 },
        { id: 2, fuel: 'Diesel', cylinders: 4 },
        { id: 3, fuel: 'Gas', cylinders: 6 },
        { id: 4, fuel: 'Gas', cylinders: 8 },
        { id: 5, fuel: 'Gas', cylinders: 10 },
        { id: 6, fuel: 'Diesel', cylinders: 12 },
    ]

    function Auto(config){
        this.title = config.title.value
        this.make = config.make.value
        this.model = config.model.value
        this.year = config.year.value
        this.price = config.price.value
        this.mileage = config.mileage.value
        this.color = config.color.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.condition = config.condition.value
        this.description = config.description.value
        this.img = config.img.value
    }

    // PUBLIC?

    this.getAutos = function getAutos(){
        return autos
    }
    
    this.getAuto = function getAuto(id){
        for (var i = 0; i < autos.length; i++) {
            var auto = autos[i];
            if(id == auto.id){
                return auto
            }
        }
    }

    this.addAuto = function addAuto(form){
        var newAuto = new Auto(form)
        autos.unshift(newAuto)
    }

}