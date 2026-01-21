const express = require("express");
const auth = require("../middlewares/auth.middleware");
const requirePermission = require("../middlewares/permission.middleware");

const router = express.Router();

router.post(
  "/users",
  auth,
  requirePermission("USER:PROFILE:CREATE"),
  (req, res) => {
    res.json({ message: "User created" });
  }
);

router.get(
  "/users",
  auth,
  requirePermission("USER:PROFILE:VIEW"),
  (req, res) => {
    res.json({ message: "User list" });
  }
);

module.exports = router;
