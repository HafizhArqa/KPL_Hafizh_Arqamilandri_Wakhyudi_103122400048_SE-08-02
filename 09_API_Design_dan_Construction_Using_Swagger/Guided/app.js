import express from "express";
import { specs, swaggerUi } from "./swagger.js";
// import swaggerJSDoc from "swagger-jsdoc";
const app = express();

const Port = 8000;
const HOSTNAME = "localhost";

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const daftarfilm = [];

/**
 * @swagger
 * /film:
 *  get:
 *      summary: Mengambil semua film yg di simpan
 *      response:
 *          200:
 *              description: Daftar film berhasil diambil
 *          404: 
 *              description: Daftar film tidak ditemukan 
 */

app.get ('/film', (req,res) => {
    return res.status(200).json(daftarfilm);
})
app.get('/film/:id', (req,res) => {
    const film = daftarfilm.find((film) => film.id === Number(req.params.id));
    if (film) {
        return res.status(404);
        }
        return res.status(200).json(film);
    })

app.post('/film', (req,res) => {
    const film = {
        id: daftarfilm.length + 1,
        judul: req.body.judul,
        genre: req.body.genre,
        year: req.body.year,
    };
    daftarfilm.push(film);
    res.json(film);
})

app.delete('/film/:id', (req,res) => {
    const indeksfilm = daftarfilm.findIndex((film) => film.id === Number(req.params.id));
    if (indeksfilm === -1) {
        return res.status(404)
    }
    const filmDihapus = daftarfilm.splice(indeksfilm, 1);
})

app.listen(8000, "localhost", () => {
    console.log(`Peladen berjalan di ${HOSTNAME}:${Port}`);
})