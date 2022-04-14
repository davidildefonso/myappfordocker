const { spawn } = require('child_process')
const scriptPath = './script.sh'
spawn('sh', [scriptPath], { stdio: 'inherit' })