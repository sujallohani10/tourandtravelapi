const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

async function connectDatabase() {
  await mongoose.connect(process.env.DATABASE);
}
connectDatabase().catch((err) => console.log(err));

// Server started...
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
