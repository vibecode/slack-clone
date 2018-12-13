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
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId'
    });
  };

  return Channel;
});

/***/ }),

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

/***/ }),

/***/ "./src/models/Team.js":
/*!****************************!*\
  !*** ./src/models/Team.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Team.associate = function (models) {
    Team.belogsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return Team;
});

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
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
    User.belogsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
  };

  return User;
});

/***/ }),

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
//# sourceMappingURL=main.6ebf57a4043a6d048550.hot-update.js.map