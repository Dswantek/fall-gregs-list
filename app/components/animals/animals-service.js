function AnimalsService() {
    
        var animals = []
    
 
        function Animal(config) {
            this.title = config.title.value
            this.age = config.age.value
            this.location = config.location.value
            this.img = config.img.value
            this.price = config.price.value
            this.type = config.type.value
            this.breed = config.breed.value
            this.description = config.description.value
            this.contact = config.contact.value
        }
    
        this.getAnimals = function getAnimals() {
            return animals
        }
    
        this.getAnimal = function getAnimal() {
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                if (id == animal.id) {
                    return animal
                }
            }
        }
    
        this.addAnimal = function addAnimal(form) {
            var newAnimal = new Animal(form)
            animals.unshift(newAnimals)
        }
    
    }