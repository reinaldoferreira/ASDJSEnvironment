/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/animals', function(req, res) {
  res.json([
    {name: 'Fluffykins', species: 'rabbit', friendlyPoints: 80 },
    {name: 'Caro', species: 'dog', friendlyPoints: 100 },
    {name: 'Hamilton', species: 'dog', friendlyPoints: 100 }
  ])
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
