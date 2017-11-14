var Properties = require('../models/property')
var router = require('express').Router()


router.get('/api/properties', (req, res, next) => {

    Properties.find({})
        .then(properties => res.sendStatus(property))
        .catch(err => res.status(400).send(err))
})

router.get('/api/properties/:id', (req, res, next) => {
    Properties.findById(req.params.id)
        .then(properties => res.send(property))
        .cath(err => res.status(400).send(err))        
})

//Creates New Property
router.post('/api/properties', (req, res, next) => {
    Properties.create(req.body)
        .then(property => res.send(property))
        .cath(err => res.status(400).send(err))    
})

router.delete('/api/properties/:id', (req, res, next) => {
    Properties.findByIdAndRemove(req.params.id)
        .then((property) => {
            res.send({ message: 'Successfully removed property at ' + req.params.id })
        })
        .cath(err => res.status(400).send(err))    
})

module.exports = router