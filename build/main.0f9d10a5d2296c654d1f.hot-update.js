require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/models/Team.js":
/*!****************************!*\
  !*** ./src/models/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Team.associate = function (models) {
    Team.belongsToMany(models.user, {
      through: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.user, {
      foreignKey: 'owner'
    });
  };

  return Team;
});

/***/ })

};
//# sourceMappingURL=main.0f9d10a5d2296c654d1f.hot-update.js.map