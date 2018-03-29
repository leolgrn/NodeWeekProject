const Token = new Mongo.Collection('token');

Token.schema = new SimpleSchema({
  user_id: {
      type: [Object],
      minCount: 1,
      maxCount: 3
  },
  date: {
    type: Date
  }
});

module.exports = Token;
