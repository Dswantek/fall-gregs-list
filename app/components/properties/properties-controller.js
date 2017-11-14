function PropertiesController() {
    var propertiesService = new PropertiesService()


    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('add-property-form')
    var propertyShowButton = document.getElementById('property-show-button')
    function drawProperties() {
        // WHERE ARE ALL THE AUTOS?
        var properties = propertiesService.getProperties()
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
        propertiesService.addProperty(form)
        propertiesFormElem.classList.toggle('hidden', true)
        drawProperties()
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

    drawProperties()

}