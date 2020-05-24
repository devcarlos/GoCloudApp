// const db = require('../startup/dinamo');
const config = require('../config');

//subscription register
const register = function (req, res, next) {
  try {
    console.log('REQUEST => ', req);
    console.log('BODY => ', req.body);
    
    let email = 'carlos.alcala@me.com';

    // return res.ErrorHandler(
    //   err,
    //   400,
    // );

    let message = `Success: ${email} subscribed successfully`;
    console.log("Success", "200", message);
    return res.SuccessHandler(message);

  } catch (error) {
    let message = `${error}`
    console.log("Error", "400", message);
    return res.ErrorHandler(
      message,
      400,
    );
  }
};


module.exports = {
  register: register
}