const jsonServer = require('json-server')
const RPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

RPServer.use(middleware)
RPServer.use(router)

RPServer.listen(PORT,()=>{
    console.log(`Recipe server started at port ${PORT}`);
})