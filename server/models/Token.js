const Token = new Mongo.Collection('token');

Token.schema = new SimpleSchema({
  user_id: {
      type: String
  },
  date: {
    type: Date
  }
});

module.exports = Token;
