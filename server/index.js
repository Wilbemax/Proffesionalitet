require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMidleware = require('./middlewares/error-middleware');
const { seedContests } = require('./seed/contests');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);
app.use('/api', router);
app.use(errorMidleware);

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		await seedContests()
		app.listen(PORT, () => console.log(`server was started on port = ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();

