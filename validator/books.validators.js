const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string() 
           .min(5)
           .max(255)
           .trim()
           .required(),
    shortDescription: Joi.string()
          .min(5)
          .max(500)
          .trim()
          .optional(),
    longDescription: Joi.string()
           .min(50)
           .optional()
           .trim()
})
//     .with('username', 'birth_year')
//     .xor('password', 'access_token')
//     .with('password', 'repeat_password');

// schema.validate({ username: 'abc', birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//     const value = await schema.validateAsync({
//         username: 'abc',
//         birth_year: 1994
//     });
// } catch (err) {}
