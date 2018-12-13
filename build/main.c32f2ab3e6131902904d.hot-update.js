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
  var Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Team.associate = function (models) {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return Team;
});

/***/ })

};
//# sourceMappingURL=main.c32f2ab3e6131902904d.hot-update.js.map