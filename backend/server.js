import express from 'express';
import connectDB from './config/db.js';
import baseRoute from './routes/BaseRoute.js'
import authRoute from './routes/AuthRoute.js'

const path = '/api/v1';
const app = express();
const port = 3000;
app.use(express.json());

app.use("/", baseRoute);
app.use(path + "/auth/", authRoute);

try {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server port: ${port}`);
    });
} catch (error) {
    process.exit(1);
}