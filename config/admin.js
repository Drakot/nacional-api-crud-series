module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92f48b34fbe40259d4b2bbf3bed125ac'),
  },
});
