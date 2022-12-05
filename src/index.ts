import express from "express";
import TestRoute from "./routes/TestRoute";
import LogRoute from "./routes/LogRoute";
import {returnError} from "./exceptions/ErrorHandler";

const app = express();

app.use(express.json());
app.use('/api',[TestRoute.routes()]);
app.use([LogRoute.routes()]);
app.use(returnError)

app.listen(3001,() => {
    console.log('Server started...')
});