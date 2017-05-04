import { expect } from 'chai'
import jsdom from 'jsdom'
import fs from 'fs'

describe('Dummy test', () => {
  it('should be true', () => expect(2 + 2).to.equal(4))
})

describe('index.html', () => {
  it('should contain Sweet', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    jsdom.env(index, (err, window) => {
      let h1 = window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Sweet')
      done()
      window.close()
    })
  })
})
