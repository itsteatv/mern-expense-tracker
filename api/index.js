import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
app.get("/api/test", (req, res) => {
    res.json({ body: "hello world" });
});

app.post("/api/transaction", (req, res) => {
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
