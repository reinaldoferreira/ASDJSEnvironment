/* eslint-disable no-console */
import fs from 'fs'
import chalk from 'chalk'
import jsf from 'json-schema-faker'
import { schema } from './mockDataSchema'

const data = JSON.stringify(jsf(schema))

fs.writeFile('./src/api/data.json', data, function(err) {
  if (err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green('Data generated!!'))
  }
})
