/* eslint-disable no-console */
import fs from 'fs'
import chalk from 'chalk'
import jsf from 'json-schema-faker'
import { schema } from './mockDataSchema'

const data = JSON.stringify(jsf(schema))

fs.writeFile('./src/api/data.json', data, err => err ?
  console.log(chalk.red(err)) : console.log(chalk.green('Data generated!!'))
)
