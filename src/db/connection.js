const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'myAppDb'

async function connection(){
	await client.connect()
	console.log('Connected succesfully to server')
	const db = client.db(dbName)
	const collection = db.collection('documents')

	return 'done.'
}

function closeConnection(){
	client.close()
}


module.exports = {
	connection,
	closeConnection
}