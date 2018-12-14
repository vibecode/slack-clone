export default (sequelize, DataTypes) => {
  const Channel = sequelize.define(
    'channel',
    {
      name: DataTypes.STRING,
      public: DataTypes.BOOLEAN
    },
    { underscored: true }
  )

  Channel.associate = models => {
    Channel.belongsTo(models.team, {
      foreignKey: {
        name: 'teamId',
        field: 'team_id'
      }
    })
  }

  return Channel
}
