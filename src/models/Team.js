export default (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  })

  Team.associate = models => {
    Team.belongsToMany(models.user, {
      through: 'member',
      foreignKey: 'teamId'
    })
    Team.belongsTo(models.user, {
      foreignKey: 'owner'
    })
  }

  return Team
}
