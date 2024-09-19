const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

const cors_options = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
module.exports = cors_options;
