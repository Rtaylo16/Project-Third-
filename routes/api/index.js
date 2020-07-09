const router = require("express").Router();
const costRoutes = require("./cost");
const userRoutes = require("./user")
// Book routes
 router.use("/cost", costRoutes);
 router.use("/user", userRoutes);
module.exports = router;
