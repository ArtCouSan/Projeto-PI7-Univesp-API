const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

const cors = require('cors');

const mongoose = require('mongoose');

const OnibusSchema = new mongoose.Schema({
    placa: String,
    estaLotado: Boolean,
    dtAlteracao: Date,
    qtnPassageiros: Number,
    status: String,
    uf: String,
    sentidoIda: String,
    sentidoVolta: String,
    identificacao: String,
    limite: Number
}, { collection: 'onibus' }
);

app.get('/onibus', async (req, res) => {
    const uf = req.query.uf;
    const status = req.query.status;
    const Onibus = mongoose.model('onibus', OnibusSchema, 'onibus');
    const onibus = await Onibus.find({
        "status": status,
        "uf": uf
    });
    res.send(onibus);
})

app.post('/onibus', (req, res) => {

    const Onibus = mongoose.model('onibus', OnibusSchema, 'onibus');
    const placa = req.body.placa;
    const estaLotado = req.body.estaLotado;
    const dtAlteracao = req.body.dtAlteracao;
    const qtnPassageiros = req.body.qtnPassageiros;
    const status = req.body.status;
    const uf = req.body.uf;
    const sentidoIda = req.body.sentidoIda;
    const sentidoVolta = req.body.sentidoVolta;
    const identificacao = req.body.identificacao;
    const limite = req.body.limite;

    const onibus = new Onibus({
        placa,
        estaLotado,
        dtAlteracao,
        qtnPassageiros,
        status,
        uf,
        sentidoIda,
        sentidoVolta,
        identificacao,
        limite
    });

    try {
        onibus.save();
        res.send(onibus);
    } catch (err) {
        next(err);
    }

});

mongoose.connect('mongodb://localhost:27017/transportes');

http.listen(3000, () => {
    console.log('listening')
})