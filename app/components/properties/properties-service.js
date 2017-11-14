function PropertiesService() {

    var properties = []

 
    function Property(config) {
        this.title = config.title.value
        this.year = config.year.value
        this.location = config.location.value
        this.img = config.img.value
        this.price = config.price.value
        this.type = config.type.value
        this.beds = config.beds.value
        this.baths = config.baths.value
        this.description = config.description.value
        this.contact = config.contact.value

    }

    this.getProperties = function getProperties() {
        return properties
    }

    this.getProperty = function getProperty() {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return property
            }
        }
    }

    this.addProperty = function addProperty(form) {
        var newProperty = new Property(form)
        properties.unshift(newProperty)
    }

}