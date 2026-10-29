import express from 'express';

import alunos from "./alunos.js";

const app = express();
const port = 3000;
 

 app.get( '/', (req, res) => {
    res.send(alunos);
 });
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));