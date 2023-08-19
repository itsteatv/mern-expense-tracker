import express from 'express';
import cors from 'cors';
import TransactionModel from "./models/Transaction.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const port = 4040;

app.get("/api/test", (req, res) => {
    res.json({ body: "hello world" });
});


app.post("/api/transaction", async (req, res) => {
    try {
        console.log("Connecting to MongoDB database...");
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB database connected successfully!");

        // Check if all required fields are present in the request body
        if (
            !req.body.name ||
            !req.body.description ||
            !req.body.dateTime ||
            !req.body.price
        ) {
            res.status(400).send("Missing required fields");
            return;
        }

        // Create a new transaction with the data from the request body
        const { name, description, dateTime, price } = req.body;
        const transaction = await TransactionModel.create({
            name,
            description,
            dateTime,
            price,
        });

        res.json(transaction);
    } catch (error) {
        console.error("Error connecting to MongoDB database:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/api/transactions", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await TransactionModel.find();
    res.json(transactions);
});

// 42P0DiILBKcq2hnx