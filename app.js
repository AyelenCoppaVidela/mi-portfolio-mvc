const express = require('express');
const app = express();
const path = require ("path")

app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require('./routers/homeRouter');
const aboutRouter = require('./routers/aboutRouter');

app.use('/', homeRouter);
app.use('/', aboutRouter)

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });