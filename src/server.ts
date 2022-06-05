import express, { RequestHandler} from 'express';
import cors from 'cors';

import './database';
import 'reflect-metadata';
import 'dotenv/config';

import { routes } from './routes'

const app = express();

app.use(express.json({ limit: '50mb' }) as RequestHandler);
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }) as RequestHandler);
app.use(cors());
app.use(routes);

app.listen(Number(process.env.PORT), process.env.HOST, () => console.log(`Server is running on port ${process.env.PORT}`));