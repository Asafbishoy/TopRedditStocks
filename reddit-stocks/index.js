const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stocks');
const sequelize = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', stockRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on port ${PORT}`);
});