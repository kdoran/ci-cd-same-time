const api = require('./index')

if (api.get().name !== 'works!') {
  console.error('test failed')
  process.exit(1)
}
