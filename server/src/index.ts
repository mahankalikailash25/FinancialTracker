import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const mongoURI: string = "Replace With Your MongoURI";

mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB!")).catch((err) => console.error("Failed to connect to MongoDB: ", err));

app.use("/financial-records", financialRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);

})

