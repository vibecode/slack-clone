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

var sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a('xczme', 'xczme', null, {
  host: 'localhost',
  dialect: 'postgres'
});
var models = {}; //this will load models from directory with webpack
//require.context(directory, useSubdirectories, regExp)
//https://webpack.js.org/guides/dependency-management/#require-context

var ctx = __webpack_require__("./src/models sync ^\\.\\/(?!index\\.js).*\\.js$");

ctx.keys().map(ctx).forEach(function (module) {
  var sequelizeModel = module.default(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_0___default.a); //we should call module.default with es6 default export instead of calling module dirrectly

  models[sequelizeModel.name] = sequelizeModel;
});
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
//# sourceMappingURL=main.28bbb31ca74388a3f288.hot-update.js.map