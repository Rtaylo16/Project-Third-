const router = require("express").Router();
const costRoutes = require("./cost");

// Book routes
 router.use("/cost", costRoutes);

module.exports = router;
