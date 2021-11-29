import express from "express";
import * as dotenv from "dotenv";
import messagesRouter from './routes/router.messages'

import bodyParser from "body-parser";

import logger from './utils/logger';
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(logger);
app.use(bodyParser.json());
app.use('/api', messagesRouter);


// start the Express server
app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );