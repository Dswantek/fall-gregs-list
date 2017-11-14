var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')
var propertyRoutes = require('./server-assets/routes/property-routes')
var animalRoutes = require('./server-assets/routes/animal-routes')

var server = express()
var port = 3001
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)
server.use(propertyRoutes)
server.use(animalRoutes)

server.listen(port, () => {
    console.log('Server is running on port, ', port)
})
