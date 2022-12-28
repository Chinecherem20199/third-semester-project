const express = require('express');
const  authorController  = require('../controller/author.controller');
const {
    AddAuthorValidationMV,
    UpdatedAuthorValidationMV
} = require('../validator/authors.validators');
const authorRouter = express.Router();

authorRouter.get('/', authorController.getAllAuthors);

authorRouter.get('/:id', authorController.getAuthorByID);

authorRouter.post('/', AddAuthorValidationMV, authorController.addAuthor);

authorRouter.put('/:id', UpdatedAuthorValidationMV, authorController.updateAuthorByID); 

authorRouter.delete('/:id', authorController.deleteAuthorById); 

module.exports = authorRouter;
