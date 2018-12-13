export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: DataTypes.STRING
  })

  Message.associate = models => {
    Message.belongsTo(models.channel, {
      foreignKey: 'channelId'
    })
    Message.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  }

  return Message
}
