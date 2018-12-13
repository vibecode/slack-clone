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
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Message;
});

/***/ })

};
//# sourceMappingURL=main.18d3b50386588297f803.hot-update.js.map