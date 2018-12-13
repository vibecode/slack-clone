require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/models/Message.js":
/*!*******************************!*\
  !*** ./src/models/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var Message = sequelize.define('message', {
    text: DataTypes.STRING
  });

  Message.associate = function (models) {
    Message.belongsTo(models.channel, {
      foreignKey: 'channelId'
    });
    Message.belongsTo(models.user, {
      foreignKey: 'userId'
    });
  };

  return Message;
});

/***/ })

};
//# sourceMappingURL=main.e8e16f2c971fd31f64c9.hot-update.js.map