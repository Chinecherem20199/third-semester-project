const express = require('express');
const  bookController  = require('../controller/book.controller');
const {
    AddBookValidationMV,
    UpdatedBookValidationMV
} = require('../validator/books.validators');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getAllBooks);

bookRouter.get('/:id', bookController.getBookByID);

bookRouter.post('/', AddBookValidationMV, bookController.addBook);

bookRouter.put('/:id', UpdatedBookValidationMV, bookController.updateBookByID); 

bookRouter.delete('/:id', bookController.deleteBookById); 

module.exports = bookRouter;
