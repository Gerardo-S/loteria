// Error handling
const handleErrors = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err.message);
  } else {
    next(err);
  }
};

module.exports = { handleErrors };
