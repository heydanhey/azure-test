const express = require('express')
const path = require('path');

let app = express()

app.use(express.static(path.join(__dirname, './build')))

module.exports = app

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})
