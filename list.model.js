const mongoose = require('mongoose')

const selectedWinners = new mongoose.Schema(
	{
		discord_id0: { type: String , required: true },
		discord_id1: { type: String , required: true },
		discord_id2: { type: String , required: true },
		discord_id3: { type: String , required: true },
		discord_id4: { type: String , required: true },
		discord_id5: { type: String , required: true },
		discord_id6: { type: String , required: true },
		discord_id7: { type: String , required: true },
		discord_id8: { type: String , required: true },
		discord_id9: { type: String , required: true },
	},
	{ collection: 'WinnersList' }
)

const model = mongoose.model('WinnersList', selectedWinners)

module.exports = model