import Sequelize from 'sequelize'
import User from './User'
import Channel from './Channel'
import Team from './Team'
import Message from './Message'

const sequelize = new Sequelize('xczme', 'xczme', null, {
  host: 'localhost',
  dialect: 'postgres'
})

const importedModels = [User, Channel, Team, Message]
const models = {}

importedModels.forEach(module => {
  const sequelizeModel = module(sequelize, Sequelize)
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
