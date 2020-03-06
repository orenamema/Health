module.exports = function(sequelize, DataTypes) {
    var patients = sequelize.define("patients", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        dob: DataTypes.STRING,
        notes: DataTypes.TEXT,
        picture: DataTypes.TEXT
    });

    return patients;
  };
  