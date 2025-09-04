const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
const clubRoutes = require("./routes/club.routes");
const mongoDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

mongoDB();

const allowedOrigins = (process.env.FRONTEND_BASE_URL || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use("/api/clubs", clubRoutes);


// health check
app.get('/health', (req, res) => res.json({ ok: true }));

// start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
