const resolvePermissions = require("../utils/resolvePermissions");

const requirePermission = (permissionKey) => {
  // ❌ DO NOT make this async
  return async (req, res, next) => {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (!req.user.permissions) {
        req.user.permissions = await resolvePermissions(req.user.userId);
      }

      if (!req.user.permissions.has(permissionKey)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = requirePermission;
