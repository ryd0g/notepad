module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '03c6f17bbf6ebbc2099e6cf2c7976b90'),
  },
});
