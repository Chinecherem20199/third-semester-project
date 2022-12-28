const Joi = require('joi');

const AuthorAddSchema = Joi.object({
    firstname: Joi.string().max(255).trim().required(),
    lastname: Joi.string().max(255).trim().required(),
    dob: Joi.date().greater('1-1-1990').less('1-1-2023').required(),
    country: Joi.string().optional(),
    books: Joi.array().items(Joi.string()).optional(),

    createdAt: Joi.date().default(Date.now),
    lastUpdateAt: Joi.date().default(Date.now)
});

const UpdatAauthorSchema = Joi.object({
    firstname: Joi.string().max(255).trim(),
    lastname: Joi.string().max(255).trim(),
    dob: Joi.date().greater('1-1-1990').less('1-1-2023'),
    country: Joi.string(),
    books: Joi.array().items(Joi.string())
});

async function AddAuthorValidationMV(req, res, next) {
    const authorPayLoad = req.body;
    try {
        await AuthorAddSchema.validateAsync(authorPayLoad);
        next();
    } catch (error) {
        next({ message: error.details[0].message, status: 400 });
    }
}

async function UpdatedAuthorValidationMV(req, res, next) {
    const authorPayLoad = req.body;
    try {
        await UpdatAauthorSchema.validateAsync(authorPayLoad);
        next();
    } catch (error) {
        next({ message: error.details[0].message, status: 400 });
    }
}

module.exports = {
    AddAuthorValidationMV,
    UpdatedAuthorValidationMV
};
