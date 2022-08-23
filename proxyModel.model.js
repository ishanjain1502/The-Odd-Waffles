const mongoose = require('mongoose')

const proxyUser = new mongoose.Schema(
	{
		discord_id: { type: String , required: true ,default: " "},
		walletAddress: { type: String, required: true, unique: true},
		syrups: { type: Number, default: 0},
		won: {type: Boolean, default: false},
		entryTime : {type: Number},
		hasDiscord: {type: Boolean} 
	},
	{ collection: 'ProxyData' }
)

const model = mongoose.model('ProxyData', proxyUser)

module.exports = model