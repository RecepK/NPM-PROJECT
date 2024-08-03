import express from 'express';
import connectDB from './config/db.js';
import authRoute from './routes/AuthRoute.js'
import dataRoute from './routes/DataRoute.js'

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    return res
        .status(201)
        .json({
            message: "Response",
            state: true
        });
})

app.post("/", (req, res) => {
    return res
        .status(201)
        .json(req.body);
})


app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/data/", dataRoute);

try {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server port: ${port}`);
    });
} catch (error) {
    process.exit(1);
}