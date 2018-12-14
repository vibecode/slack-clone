export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
  })

  User.associate = models => {
    User.belongsToMany(models.team, {
      through: 'member',
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })

    User.belongsToMany(models.team, {
      through: 'channel_member',
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    })
  }

  return User
}
