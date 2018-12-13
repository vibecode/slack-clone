require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);

var sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a('slack', 'postgres', 'postgres', {
  dialect: 'postgres'
});
var models = {
  User: sequelize.import('./User'),
  Channel: sequelize.import('./Channel'),
  Team: sequelize.import('./Team'),
  Message: sequelize.import('./Message')
};
Object.keys(models).forEach(function (modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (models);

/***/ })

};
//# sourceMappingURL=main.20918ffb8aa28a6737da.hot-update.js.map