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
  var Channel = sequelize.define('channel', {
    name: {
      type: DataTypes.STRING,
      public: DataTypes.BOOLEAN
    }
  });

  Channel.associate = function (models) {
    Channel.belongsTo(models.team, {
      foreignKey: 'teamId'
    });
  };

  return Channel;
});

/***/ })

};
//# sourceMappingURL=main.1dc5bb4ca194591675cb.hot-update.js.map