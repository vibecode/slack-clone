require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = function (models) {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
  };

  return User;
});

/***/ })

};
//# sourceMappingURL=main.3ad04cfc8c6623ddb25f.hot-update.js.map