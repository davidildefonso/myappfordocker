const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src', 'react', 'main.jsx'),
	output: {
		path: path.join(__dirname, 'public')
	},
	module:{
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.join(__dirname, 'src', 'react'),
				exclude: path.join(__dirname, 'node_modules'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									'targets': 'defaults'
								}],
								'@babel/preset-react'
							]
						}
					}
				]
			}
		]
	}
}