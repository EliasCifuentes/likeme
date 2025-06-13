import { deletePostModel, getAllPostModel, updatePostModel } from "../models/postModel.js";
import { createPostModel } from "../models/postModel.js";

//GET
export const getAllPost = async (req, res) => {
    try {
        const post = await getAllPostModel()
        res.json(post)
    } catch (error) {
        console.error('Error en la solicitud', error)
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
}

//POST
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

//PUT
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const updatePost = await updatePostModel(id)
        console.log('Post actualizado')
        res.json({ post: updatePost })
    } catch (error) {
        console.error('Error al incrementar likes:', error);
        res.status(500).json({ error: 'No se pudo incrementar el like' });
    }
}

//DELETE
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const deletePost = await deletePostModel(id)
        if (deletePost === 0) {
            return console.error('No se encuentra el post', error)
        }
        console.log('Post Eliminado')
        res.json('Post Eliminado')
    } catch (error) {
        res.error({ error })
        console.error('Error al eliminar Post', error)
    }
}
