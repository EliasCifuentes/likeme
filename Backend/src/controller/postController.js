import { getAllPostModel } from "../models/postModel.js";
import { createPostModel } from "../models/postModel.js";

export const getAllPost = async (req, res) => {
    try {
        const post = await getAllPostModel()
        res.json(post)
    } catch (error) {
        console.error('Error en la solicitud', error)
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
}

export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        console.log('Datos recibidos:', req.body);// prueba
        const newPost = await createPostModel({ titulo, img, descripcion, likes })
        res.json({ post: newPost })
    } catch (error) {
        console.error('Error alingresar datos: ', error)
    }
}

