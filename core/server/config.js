module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_LABS_URI || 'mongodb://localhost:27017/theJobSlayer',
  SESSION_SECRET: 'death-to-no-jobba'
};
