// Yusuke Kuroki(301137023) Oct.18 disable for assignment 2

// let express = require('express');
// let router = express.Router();
// let mongoose = require('mongoose');

// let jwt = require('jsonwebtoken');

// // create a reference to the model
// let Book = require('../models/book');

// module.exports.displayBookList = (req, res, next) => {
// 	Book.find((err, bookList) => {
// 		if (err) {
// 			return console.error(err);
// 		} else {
// 			// console.log(BookList);
// 			res.render('book/list', 
// 				{
// 					title: 'Books', 
// 					BookList: bookList, 
// 					displayName: req.user ? req.user.displayname : ''
// 				});
// 		}
// 	});
// };

// module.exports.displayAddPage = (req, res, next) => {
// 	res.render('book/add', 
// 		{
// 			title: 'Add Book', 
// 			displayName: req.user ? req.user.displayname : ''
// 		});
// };

// module.exports.processAddPage = (req, res, next) => {
// 	let newBook = Book({
// 		"name": req.body.name,
// 		"author": req.body.author,
// 		"published": req.body.published,
// 		"description": req.body.description,
// 		"price": req.body.price
// 	});

// 	Book.create(newBook, (err, Book) => {
// 		if (err) {
// 			console.log(err);
// 			res.end(err);
// 		} else {
// 			// refresh the book list
// 			res.redirect('/book-list');
// 		}
// 	});
// };

// module.exports.displayEditPage = (req, res, next) => {
// 	let id = req.params.id;

// 	Book.findById(id, (err, bookToEdit) => {
// 		if (err) {
// 			console.log(err);
// 			res.end(err);
// 		} else {
// 			// show the edit view
// 			res.render('book/edit', 
// 				{
// 					title: 'Edit Books', 
// 					book: bookToEdit, 
// 					displayName: req.user ? req.user.displayname : ''
// 				});
// 		}
// 	});
// };

// module.exports.processEditPage = (req, res, next) => {
// 	let id = req.params.id;

// 	let updatedBook = Book({
// 		"_id": id,
// 		"name": req.body.name,
// 		"author": req.body.author,
// 		"published": req.body.published,
// 		"description": req.body.description,
// 		"price": req.body.price
// 	});

// 	Book.updateOne({_id: id}, updatedBook, (err) => {
// 		if (err) {
// 			console.log(err);
// 			res.end(err);
// 		} else {
// 			// refresh the book list
// 			res.redirect('/book-list');
// 		}
// 	});
// };

// module.exports.performDelete = (req, res, next) => {
// 	let id = req.params.id;

// 	Book.remove({_id: id}, (err) => {
// 		if (err) {
// 			console.log(err);
// 			res.end(err);
// 		} else {
// 			// refresh the book list
// 			res.redirect('/book-list');
// 		}
// 	});
// };