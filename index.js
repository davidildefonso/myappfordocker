const express = require('express')
const port = 3000
const app = express()
const path = require('path')
const { connection, closeConnection } = require(path.join(__dirname, 'src/db/connection.js'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, async () => {
	console.log(`app listening on port ${port}`)
	try {
		await connection()
		console.log('connected')
	} catch (error) {
		console.error('error:', error)
	}finally{
		closeConnection()
		console.log('connection closed')
	}
})