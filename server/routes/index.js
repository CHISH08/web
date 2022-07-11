const Router = require('express')
const router = new Router()
const user = require('./User')

router.use('/User', user)

module.exports = router