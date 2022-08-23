const mongoose = require('mongoose')

const Winner = new mongoose.Schema(
	{
		walletAddress: { type: String, required: true, unique: true },
		discord_id: { type: String , default: '' , unique:true},
		syrups: { type: Number},
		won: {type: Boolean, default: false},
		hasDiscord: {type: Boolean} 
	},
	{ collection: 'waffleWhitelists' }
)

const model = mongoose.model('WinnerData', Winner)

module.exports = model