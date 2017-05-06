/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'
import compression from 'compression'

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/users', (req, res) => {
  return res.json([
    {name: 'Fluffykins', species: 'rabbit', friendlyPoints: 80 },
    {name: 'Caro', species: 'dog', friendlyPoints: 100 },
    {name: 'Hamilton', species: 'dog', friendlyPoints: 100 }
  ])
})

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html')))

app.listen(port, err =>
  err ? console.log(chalk.red(err)) : open('http://localhost:' + port))
