const expressJwt = require("express-jwt");
const User = require("../../models/user");

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
});

exports.adminMiddleware = (req, res, next) => {
  User.findById({ _id: req.user._id }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `User not found ${err}`,
      });
    }
    if (user.role !== "admin") {
      return res.status(400).json({
        error: "Access denied ",
      });
    }
    req.profile = user;
    next();
  });
};
