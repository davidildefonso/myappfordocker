const { exec } = require('child_process')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
const scriptPath = path.join(__dirname, 'bash', 'initMongod.sh')
exec(`sh ${scriptPath}`, (err, stdout, stderr) => {
	if(err){
		console.error(err)
		return
	}
	console.log(stdout, stderr)
}) 