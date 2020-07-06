const router = require("express").Router();
const costRoutes = require("./cost");


 router.use("/cost", costRoutes);

module.exports = router;
