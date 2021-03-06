const express = require('express');
const cors = require('cors');

const { productsRoutes } = require('../routes')

const { limiter, corsOptions } = require('../middlewares');
const sequelize = require('../database/connection');

const {v2: cloudinary} = require('cloudinary');
const cloudinaryConfig = require('../cloudinary/config');
const fileUpload = require('express-fileupload');

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
        this.#port = process.env.PORT;
        this.#host = process.env.HOST;

        this.dbConnection();
        this.cloudinary();
        this.middlewares();
        this.routes();
    }

    listen() {
        this.#app.listen(this.#port, () =>
            console.log(`Escuchando en http://${this.#host}:${this.#port}`)
        );
    }

    async dbConnection() {
        try {
            await sequelize.authenticate();
            console.log('Base de datos online');
        } catch (err) {
            throw new Error(err)
        }
    }

    routes() {
        this.#app.use(this.#apiPaths.products, productsRoutes);
    }

    cloudinary() {
        cloudinaryConfig(cloudinary);
        console.log('Conectado a cloudinary');
    }

    middlewares() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        // this.#app.use(limiter);
        // this.#app.use(cors(corsOptions));
        this.#app.use(cors());
        this.#app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            //Generar carpeta autumaticamente en caso de no existir
            createParentPath: true
        }))
    }
}

module.exports = Server;