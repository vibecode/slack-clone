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
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/models/User.js");
/* harmony import */ var _Channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Channel */ "./src/models/Channel.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Team */ "./src/models/Team.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./src/models/Message.js");





var sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a('xczme', 'xczme', null, {
  host: 'localhost',
  dialect: 'postgres'
});
var importedModels = [_User__WEBPACK_IMPORTED_MODULE_1__["default"], _Channel__WEBPACK_IMPORTED_MODULE_2__["default"], _Team__WEBPACK_IMPORTED_MODULE_3__["default"], _Message__WEBPACK_IMPORTED_MODULE_4__["default"]];
var models = {}; //require.context(directory, useSubdirectories = false, regExp = /^\.\//);

var ctx = __webpack_require__("./src/models sync ^\\.\\/(?!index\\.js).*\\.js$");

ctx.keys(); // importedModels.forEach(module => {
//   const sequelizeModel = module(sequelize, Sequelize)
//   models[sequelizeModel.name] = sequelizeModel
// })

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
//# sourceMappingURL=main.97b718255301d66d1968.hot-update.js.map