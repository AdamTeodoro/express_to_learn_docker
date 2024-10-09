const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const htmlPage =  `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Site carregou</title>
        </head>
        <body>
            <h1>Você acessou a página principal</h1>
        </body>
        </html>
    `
    res.status(200)
        .send(htmlPage)
        .end();
});

app.get('/version', (req, res) => {
    res.status(200)
        .json({ version: '1.0.0' })
        .end();
    return;
});

const port = 3000;

// app.listen(port, '0.0.0.0', () => console.log(`Listen in: http://localhost:${port}`));
app.listen(port, () => console.log(`Listen in: http://localhost:${port}`));

