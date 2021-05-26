module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        UID : {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true
        },
        PWD : {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        AUTH : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        timestamps: false,
    })
}