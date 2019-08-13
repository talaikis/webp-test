const { join } = require('path')
const { readdir } = require('fs')
const { CWebp } = require('cwebp')
const { DWebp } = require('cwebp')

const list = (dir, done) => {
  readdir(join(__dirname, dir), (err, data) => {
    if (!err && data) {
      done(false, data)
    } else {
      done(err)
    }
  })
}

const encode = () => {
  list('data', (err, lst) => {
    if (!err && lst) {
      lst.slice(0, (lst.length - 1)).forEach((image) => {
        let encoder = new CWebp(join(__dirname, 'data', image))
        encoder.quality(85)
        encoder.write(join(__dirname, 'data', 'output', `${image}.webp`), (err) => {
          console.log(err || 'encoded successfully')
        })
      })
    } else {
      console.log(e.message)
    }
  })
}

const decode = () => {
  const decoder = new DWebp(source_webp)
}

encode()
