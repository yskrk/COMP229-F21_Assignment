let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
	contactname: {
		type: String,
		default: '',
		trim: true,
		require: 'contactname is required'
	},
	contactnumber: {
		type: Number,
		default: '',
		trim: true,
		require: 'contactnumber is required'
	},
	email: {
		type: String,
		default: '',
		trim: true,
		require: 'email is required'
	}
},
{
	collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);