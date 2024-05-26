const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://manikantabharath:Mani%400401@cluster0.bsaur39.mongodb.net/personal-standup?retryWrites=true&w=majority&appName=Cluster0'
		)
		console.log('MongoDB connected')
	} catch (err) {
		console.error(err.message)
		process.exit(1)
	}
}

module.exports = connectDB
