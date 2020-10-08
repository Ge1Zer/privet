const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const middlewares = jsonServer.defaults()

const router = jsonServer.router(path.join(__dirname, '/db/db.json'))

server.use('/api', router)

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})