const db = require("../models");

// Routes for patients
module.exports = {
  findAll: function(req, res) {
    db.patients.findAll({}).then(function(data){
        res.json(data);
    })
  },
  findById: function(req, res) {
    db.patients.findAll({
      where:{
        id: req.params.id
      }
    }).then(function(data){
        res.json(data);
    })
  },
  create: function(req, res) {
    db.patients.create(req.body).then(function(results) {
      res.json(results);
    });    
  },
  update: function(req, res) {
    db.patients.update(
        { 
          notes: req.body.notes
        }, {
          where: {id: req.params.id},
        }
    ).then(function(data){
        res.json(data);
    });
  },
  remove: function(req, res) {
    db.patients.destroy({
      where: {
        id: req.params.id
      }
    })
  }
};
