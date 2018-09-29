const app = require('express')()
const morgan = require('morgan')
const cors = require('cors')
const parser = require('body-parser')
app
  .use(parser({extended: true}))
  .use(cors)
  .use(morgan('dev'))

const apikey = process.env.APIKEY || "qwe123qwe"

app.use('/:key',(req,res,next)=>{
    if (req.params.key == apikey){
        next()
    } else {
        res.send("i don't think so...")
    }
}, require('./routers/root'))

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log('on port', port)
})
