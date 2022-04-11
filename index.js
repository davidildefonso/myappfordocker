const { exec } = require('child_process')
const scriptPath = './script.sh'
exec(`sh ${scriptPath}`, (err, stdout, stderr) => {
	if(err){
		console.error(err)
		return
	}
	console.log(stdout, stderr)
})