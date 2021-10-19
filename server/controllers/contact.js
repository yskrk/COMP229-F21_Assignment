let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
	Contact.find((err, contactList) => {
		if (err) {
			return console.error(err);
		} else {
			res.render('contact/list', 
				{
					title: 'Business Contact List', 
					ContactList: contactList, 
					displayName: req.user ? req.user.displayname : ''
				});
		}
	}).sort({"contactname": 1});
};

module.exports.displayAddPage = (req, res, next) => {
	res.render('contact/add', 
		{
			title: 'Add Business Contact', 
			displayName: req.user ? req.user.displayname : ''
		});
};

module.exports.processAddPage = (req, res, next) => {
	let newContact = Contact({
		"contactname": req.body.contactname,
		"contactnumber": req.body.contactnumber,
		"email": req.body.email
	});

	Contact.create(newContact, (err, Contact) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// refresh the contact list
			res.redirect('/contact-list');
		}
	});
};

module.exports.displayEditPage = (req, res, next) => {
	let id = req.params.id;

	Contact.findById(id, (err, contactToEdit) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// show the edit view
			res.render('contact/edit', 
				{
					title: 'Edit Business Contact', 
					contact: contactToEdit, 
					displayName: req.user ? req.user.displayname : ''
				});
		}
	});
};

module.exports.processEditPage = (req, res, next) => {
	let id = req.params.id;

	let updatedContact = Contact({
		"_id": id,
		"contactname": req.body.contactname,
		"contactnumber": req.body.contactnumber,
		"email": req.body.email
	});

	Contact.updateOne({_id: id}, updatedContact, (err) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// refresh the contact list
			res.redirect('/contact-list');
		}
	});
};

module.exports.performDelete = (req, res, next) => {
	let id = req.params.id;

	Contact.remove({_id: id}, (err) => {
		if (err) {
			console.log(err);
			res.end(err);
		} else {
			// refresh the contact list
			res.redirect('/contact-list');
		}
	});
};