const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({
  passError: true,
});
const Joi = require('@hapi/joi');

//controllers
const SubscriptionController = require('../controllers/subscription');

const validationSchema = {
  register: {
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    RUT: Joi.string().required()
  }
};

/* POST landing/subscriptions */
router.post(
  '/subscriptions',
  validator.body(Joi.object(validationSchema.register)),
  SubscriptionController.register
);

module.exports = router;