import Sequelize from 'sequelize'

const sequelize = new Sequelize('slack', 'postgres', null, {
  host: 'localhost',
  dialect: 'postgres'
})

const models = {}

//this will load models from directory with webpack
//require.context(directory, useSubdirectories, regExp)
//https://webpack.js.org/guides/dependency-management/#require-context
const ctx = require.context('.', false, /^\.\/(?!index\.js).*\.js$/, 'sync')

ctx
  .keys()
  .map(ctx)
  .forEach(module => {
    //we should call module.default with es6
    //default export instead of calling module dirrectly
    const sequelizeModel = module.default(sequelize, Sequelize)
    models[sequelizeModel.name] = sequelizeModel
  })

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
