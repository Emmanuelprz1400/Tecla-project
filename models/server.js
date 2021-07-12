const express = require('express');
const cors = require('cors');

const { productsRoutes } = require('../routes')

const { limiter, corsOptions } = require('../middlewares')

class Server {

    #app;
    #port;
    #host;
    // Ruta inicial
    #apiPaths = {
        products: '/api/products',
    }

    constructor() {
        this.#app = express();
        this.#port = process.env.PORT || '3000';
        this.#host = process.env.HOST || 'localhost';

        this.middlewares();
        this.routes();
    }

    listen() {
        this.#app.listen(this.#port, () =>
            console.log(`Escuchando en http://${this.#host}:${this.#port}`)
        );
    }

    routes() {
        this.#app.use(this.#apiPaths.products, productsRoutes);
    }

    middlewares() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(limiter);
        this.#app.use(cors(corsOptions));
    }
}

module.exports = Server;