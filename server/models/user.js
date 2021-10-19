// requre modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create a model class
let User = mongoose.Schema({
	username: {
		type: String,
		default: '',
		trim: true,
		require: 'Username is required'
	},
	password: {
		type: String,
		default: '',
		trim: true,
		require: 'password is required'
	},
	email: {
		type: String,
		default: '',
		trim: true,
		require: 'Email is required'
	},
	displayname: {
		type: String,
		default: '',
		trim: true,
		require: 'Display name is required'
	},
	created: {
		type: Date,
		default: Date.now,
	},
	update: {
		type: Date,
		default: Date.now,
	}
},
{
	collection: "users"
});

// configure options for User Model
let options = ({missingPasswordError: 'Wrong / Missing password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);