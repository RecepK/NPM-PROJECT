import express from 'express';
import connectDB from './config/db.js';

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

try {
    await connectDB();

    app.listen(port, () => {
        console.log(`Server port: ${port}`);
    });
} catch (error) {
    process.exit(1);
}