const exjwt = require("express-jwt");

const hasValidToken = exjwt({
  secret: process.env.SERVER_SECRET,
  algorithms: ["HS256"],
});

module.exports = { hasValidToken };
