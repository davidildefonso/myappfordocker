const express = require('express')
const port = 3000
const app = express()
const path = require('path')
const { connection, closeConnection } = require(path.join(__dirname, 'src/db/connection.js'))

app.use(express.static(path.join(__dirname, 'public')))

async function start(){
	try {
		await connection()
		console.log('connected')
		app.listen(port, async () => {
			console.log(`app listening on port ${port}`)
			
		})
	} catch (error) {
		console.error('error:', error)
		closeConnection()
		console.log('connection closed')
	}
}

start()

