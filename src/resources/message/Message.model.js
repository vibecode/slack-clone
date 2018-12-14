export default (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'message',
    {
      text: DataTypes.STRING
    },
    { underscored: true }
  )

  Message.associate = models => {
    Message.belongsTo(models.channel, {
      foreignKey: 'channelId',
      field: 'channel_id'
    })
    Message.belongsTo(models.user, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })
  }

  return Message
}
