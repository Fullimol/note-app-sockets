import express from 'express';
import path from 'path'

const app = express();

app.use(express.static(path.join(__dirname, 'public'))) // Le indico donde se encuentra la carpeta "public", lo que respecta al frontend

export default app;