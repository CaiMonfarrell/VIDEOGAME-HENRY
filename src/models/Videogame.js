const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false
    },
    description: {     
      type : DataTypes.STRING,
      allowNull: false
    },
    released: {
      type : DataTypes.DATEONLY,
      defaultValue : DataTypes.NOW,
    },
    rating: {
      type : DataTypes.FLOAT
    },
    platforms: {
      type : DataTypes.STRING,
      allowNull: false
    },
    image : {
      type : DataTypes.STRING,
    },
    inBd : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true
    }
  },{
    timestamps: false
  });
};
