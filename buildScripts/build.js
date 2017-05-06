/*eslint-disable no-console */
import chalk from 'chalk'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'

process.env.NODE_ENV = 'production'

console.log(chalk.blue('Generating minified file. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err))
    return 1
  }

  let jsonStats = stats.toJson()

  if (jsonStats.hasErrors) jsonStats.errors.map(err => console.log(chalk.red(err)))

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack returned some warnings: '))
    jsonStats.warnings.map(warn => console.log(chalk.yellow(warn)))
  }

  console.log(' Webpack stats: ' + stats)
  console.log(chalk.green('Your app has been built for production into /dist!'))

  return 0
})
