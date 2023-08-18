import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    dateTime: { type: Date, required: true },
    description: { type: String, required: true },
});

const TransactionModel = model("Transaction", TransactionSchema);

export default TransactionModel