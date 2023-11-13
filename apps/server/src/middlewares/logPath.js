const log = (req, res, next) => {
  console.log("request to the PATH : ", req.path);
  next();
};

module.exports = log;
