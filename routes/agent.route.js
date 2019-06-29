const express = require('express')
const router = express.Router()
const agent_controller = require('../controller/agent.controller')

router.get('/agents', agent_controller.agents)

module.exports = router