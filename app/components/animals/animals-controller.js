function AnimalsController() {
    var animalsService = new AnimalsService()


    var animalsElem = document.getElementById('animals-list')
    var animalsFormElem = document.getElementById('add-animal-form')
    var animalsShowButton = document.getElementById('animal-show-button')

    function getAnimals(){
        animalsService.getAnimals(drawAnimals)
    }

    function drawAnimals(animals) {
        // WHERE ARE ALL THE AUTOS?
     
        var template = ''
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            template += `
              <div class="col-md-3 text-center">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${animal.title}</h3>
                          <h6>${animal.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${animal.img}" class="img-responsive">
                          <h4>Built in ${animal.year}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${animal.price}</h5>
                      </div>
                  </div>
              </div>
              `
        }
        animalsElem.innerHTML = template
    }

    this.addAnimal = function addAnimal(event) {
        event.preventDefault()
        var form = event.target
        animalsService.addAnimal(form, getAnimals)
        animalsFormElem.classList.toggle('hidden', true)
    }

    var formstate = false

    this.showAddAnimalForm = function showAddAnimalForm() {
        if (formstate) {
            animalsShowButton.innerText = 'Add Animal Listing'
            animalsShowButton.className = 'btn btn-info'
            animalsFormElem.classList.add('hidden')
            formstate = false
        } else {
            animalsShowButton.innerText = 'Cancel'
            animalsShowButton.className = 'btn btn-danger'
            animalsFormElem.classList.remove('hidden')
            formstate = true
        }
    }

    this.removeAnimal = function removeAnimal(index){
        animalsService.removeAnimals(index, getAnimals)
    }

    getAnimals()

}