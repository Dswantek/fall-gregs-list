function PropertiesController() {
    var propertiesService = new PropertiesService()


    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('add-property-form')
    var propertyShowButton = document.getElementById('property-show-button')

    function getProperties(){
        propertiesService.getProperties(drawProperties)
    }

    function drawProperties(properties) {
        // WHERE ARE ALL THE AUTOS?
     
        var template = ''
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            template += `
              <div class="col-md-3 text-center">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${property.title}</h3>
                          <h6>${property.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${property.img}" class="img-responsive">
                          <h4>Built in ${property.year}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${property.price}</h5>
                      </div>
                  </div>
              </div>
              `
        }
        propertiesElem.innerHTML = template
    }

    this.addProperty = function addProperty(event) {
        event.preventDefault()
        var form = event.target
        propertiesService.addProperty(form, getProperties)
        propertiesFormElem.classList.toggle('hidden', true)
    }

    var formstate = false

    this.showAddPropertyForm = function showAddPropertyForm() {
        if (formstate) {
            propertyShowButton.innerText = 'Add Property Listing'
            propertyShowButton.className = 'btn btn-info'
            propertiesFormElem.classList.add('hidden')
            formstate = false
        } else {
            propertyShowButton.innerText = 'Cancel'
            propertyShowButton.className = 'btn btn-danger'
            propertiesFormElem.classList.remove('hidden')
            formstate = true
        }
    }

        this.removeProperty = function removeProperty(index){
            propertiesService.removeProperty(index, getProperties)
        }

    getProperties()

}