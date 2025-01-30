const roleCheck = (roles) => (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send("Access Denied");
    }
  };
  
  module.exports = roleCheck;
  