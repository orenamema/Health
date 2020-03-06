const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/patients"
router
  .route("/")
  .get(patientController.findAll)
  .post(patientController.create);

// Matches with "/api/patients/:id"
router
  .route("/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove);

// Matches with "/api/patients/delete/:id"
router
  .route("/delete/:id")
  .delete(patientController.remove);



module.exports = router;
