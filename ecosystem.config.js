module.exports = [
	{
		script: 'index.js',
		name: 'myapp',
		exec_mode: 'cluster',
		instances: 2
	},
	{
		script: 'worker.js',
		name: 'worker'
	}
]