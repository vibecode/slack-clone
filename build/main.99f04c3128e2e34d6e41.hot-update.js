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
  var Message = sequelize.define('Message', {
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
//# sourceMappingURL=main.99f04c3128e2e34d6e41.hot-update.js.map