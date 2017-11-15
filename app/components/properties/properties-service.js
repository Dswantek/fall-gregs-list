function PropertiesService() {
    var baseUrl = 'http://localhost:3001/api/properties'

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

    this.getProperties = function getProperties(cb) {
        if (!cb || typeof cb != 'function') { return console.error('Woah I need a cb to run')}
            $.get(baseUrl)
                .then(res => {
                    properties = res
                    cb(properties)
                })
                .fail(logError)
        }

        this.getProperty = function getProperty() {
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if (id == property.id) {
                    return property
                }
            }
        }

        this.addProperty = function addProperty(form, getProperties) {
            if (!form || !getProperties || typeof getProperties != 'function') { return console.error('unable to add Property ', 'bad parameters', form, getProperties) }
            var newProperty = new Property(form)
            $.post(baseUrl, newProperty)
                .then(getProperties)
                .fail(logError)
        }

        this.removeProperty = function removeProperty(index, getProperties){
            $.ajax({
                url: baseUrl + '/' + index,
                method: 'DELETE'
            })
                .then(getProperties)
                .fail(logError)
        }


    }