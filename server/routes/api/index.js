const router = require("express").Router();
const patientsApi = require("./patientsApi");

// Post routes
router.use("/patients", patientsApi);

module.exports = router;