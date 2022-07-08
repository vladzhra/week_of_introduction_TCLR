module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return Tutorial;
};