export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain letters and numbers'
        },
        len: {
          args: [3, 25],
          msg: 'The username needs to be between 3 and 25 characters long'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 100],
          msg: 'the password needs to be between 5 and 100 characters long'
        }
      }
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
