require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/models/Channel.js":
/*!*******************************!*\
  !*** ./src/models/Channel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var Channel = sequelize.define('Channel', {
    name: {
      type: DataTypes.STRING,
      public: DataTypes.BOOLEAN
    }
  });

  Channel.associate = function (models) {
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId'
    });
  };

  return Channel;
});

/***/ })

};
//# sourceMappingURL=main.784d113df6af5fecbc08.hot-update.js.map