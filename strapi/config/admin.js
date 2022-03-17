module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '35b8133e83f0107fb81993c2f25c031f'),
  },
});
