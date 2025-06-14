import { deletePostModel, getAllPostModel, updatePostModel } from "../models/postModel.js";
import { createPostModel } from "../models/postModel.js";

//GET
export const getAllPost = async (req, res, next) => {
    try {
        const posts = await getAllPostModel()
        res.json(posts)
        console.log('Datos obetenidos correctamente')
    } catch (error) {
        next(error)
    }
}

//POST
export const createPost = async (req, res, next) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        if (!titulo || !img || !descripcion) {
            const error = new Error("Todos los campos son obligatorios")
            error.statusCode = 400
            throw error
        }
        const newPost = await createPostModel({ titulo, img, descripcion, likes })
        res.status(201).json({ message: 'Post creado correctamente', post: newPost })
        console.log('Post Agregado')
    } catch (error) {
        next(error)
    }
}

//PUT
export const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params
        const updated = await updatePostModel(id)
        if (!updated) {
            const error = new Error("Post no encontrado")
            error.statusCode = 404
            throw error
        }
        res.json({ message: 'Post actualizado correctamente', post: updated })
        console.log('Post actualizado')
    } catch (error) {
        next(error)
    }
}

//DELETE
export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await deletePostModel(id)
        if (deleted === 0) {
            const error = new Error("Post no encontrado")
            error.statusCode = 404
            throw error
        }
        res.json({ message: 'Post eliminado correctamente' })
        console.log('Post Eliminado')
    } catch (error) {
        next(error)
    }
}
