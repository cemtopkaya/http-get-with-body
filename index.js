const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(cors());
app.use('/', express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.get('/', (req, res) => {
    console.log("GET ile Gelen isteğin gövdesi: ", req.body)
  res.send('Hello World from GET!')
})
app.post('/', (req, res) => {
    console.log("POST ile Gelen isteğin gövdesi: ", req.body)
    console.log("POST ile Gelen isteğin params: ", req.params)
  res.send('Hello World from POST!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})