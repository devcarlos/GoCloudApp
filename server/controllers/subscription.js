const { dynamoDB, aws_table_name } = require('../startup/dynamo');
const { v4: uuidv4 } = require('uuid');


const list = function (req, res, next) {
  try {
    const params = {
      TableName: aws_table_name
    };

    dynamoDB.scan(params, function (err, data) {
      if (err) {
        let message = `${err}`
        console.log("Error", "400", message);
        return res.ErrorHandler(
          message,
          400,
        );
      } else {
        const { Items } = data;

        console.log('DATA => ', data);

        let message = `Success: GET list successfully`;
        console.log("Success", "200", message);
        return res.SuccessHandler({ subscriptions: Items });
      }
    });
  } catch (error) {
    let message = `${error}`
    console.log("Error", "400", message);
    return res.ErrorHandler(
      message,
      400,
    );
  }
};

//subscription register
const register = function (req, res, next) {
  try {
    // console.log('REQUEST => ', req);
    console.log('BODY => ', req.body);

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let RUT = req.body.RUT;

    // Generate item ID with UUID
    // https://github.com/uuidjs/uuid
    const itemId = uuidv4();

    const params = {
      TableName: aws_table_name,
      Item: {
        id: itemId,
        name: name,
        email: email,
        phone: phone,
        RUT: RUT
      }
    };

    console.log('PARAMS => ', params);

    dynamoDB.put(params, function (err, data) {
      if (err) {
        let message = `${err}`
        console.log("Error", "400", message);
        return res.ErrorHandler(
          message,
          400,
        );
      } else {
        let message = `Success: POST subscriptioon registered: ${email}`;
        console.log("Success", "200", message);
        return res.SuccessHandler(message);
      }
    });
  } catch (error) {
    let message = `${error}`
    console.log("Error", "400", message);
    return res.ErrorHandler(
      message,
      400,
    );
  }
};

//subscription listBy
const listById = function (req, res, next) {
  try {
    console.log('BODY => ', req.body);

    const itemID = req.params.id;
    console.log('itemID => ', itemID)

    const params = {
      TableName: aws_table_name,
      KeyConditionExpression: 'id = :i',
      ExpressionAttributeValues: {
        ':i': itemID
      }
    };
    console.log('PARAMS => ', params);

    dynamoDB.query(params, function(err, data) {
      if (err) {
        let message = `${err}`
        console.log("Error", "400", message);
        return res.ErrorHandler(
          message,
          400,
        );
      } else {
        const { Items } = data;
        console.log('DATA => ', data);

        if (Items.length > 0) {
          let subscription = Items[0];
          let message = `Success: GET Subscription`;
          console.log("Success", "200", message);
          return res.SuccessHandler({ subscription: subscription });
        } else {
          let message = 'Error: Subscription Not Found'
          console.log("Error", "400", message);
          return res.ErrorHandler(
            message,
            400,
          );
        }
      }
    });
  } catch (error) {
    let message = `${error}`
    console.log("Error", "400", message);
    return res.ErrorHandler(
      message,
      400,
    );
  }
};

//subscription deleteById
const deleteById = function (req, res, next) {
  try {
    console.log('BODY => ', req.body);

    const itemID = req.params.id;
    console.log('itemID => ', itemID)

    const params = {
      TableName: aws_table_name,
      Key:{
        "id": itemID
      }
    };
    console.log('PARAMS => ', params);

    dynamoDB.delete(params, function(err, data) {
      if (err) {
        let message = `${err}`
        console.log("Error", "400", message);
        return res.ErrorHandler(
          message,
          400,
        );
      } else {
          let message = `Success: DELETED Subscription`;
          console.log("Success", "200", message);
          return res.SuccessHandler(message);
      }
    });
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
  register: register,
  list: list,
  listById: listById,
  deleteById: deleteById
}