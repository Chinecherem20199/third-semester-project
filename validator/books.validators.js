const Joi = require('joi');

const bookAddSchema = Joi.object({
    title: Joi.string().min(5).max(255).trim().required(),
    shortDescription: Joi.string().min(5).max(500).trim().optional(),
    longDescription: Joi.string().min(50).optional().trim(),
    year: Joi.number().integer().required().max(2022),
    isbn: Joi.string().required().min(10).max(14),
    price: Joi.number().min(0).required(),

    createdAt: Joi.date().default(Date.now),
    lastUpdateAt: Joi.date().default(Date.now)
});

const bookUpdateSchema = Joi.object({
    title: Joi.string().min(5).max(255).trim(),
    shortDescription: Joi.string().min(5).max(500).trim(),
    longDescription: Joi.string().min(50).trim(),
    year: Joi.number().integer().max(2022),
    isbn: Joi.string().min(10).max(14),
    price: Joi.number().min(0),
});

async function AddBookValidationMV(req, res, next){
       const bookPayLoad = req.body;
       try {
          await bookAddSchema.validateAsync(bookPayLoad)
          next()    
       } catch (error) {
             next({ message: error.details[0].message , status: 400}); 
       }
}

async function UpdatedBookValidationMV(req, res, next) {
    const bookPayLoad = req.body;
    try {
        await bookUpdateSchema.validateAsync(bookPayLoad);
        next();
    } catch (error) {
        next({ message: error.details[0].message, status: 400 });
    }
}

module.exports = {
    AddBookValidationMV,
    UpdatedBookValidationMV
};