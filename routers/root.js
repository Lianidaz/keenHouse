const r = require('express').Router()

r.get('/driveby', (req,res)=>{
    //pass
    res.send('fine')
})

module.exports = r
