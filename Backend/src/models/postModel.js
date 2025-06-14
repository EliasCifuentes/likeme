import { text } from "express"
import pool from "../../db/config.js"
//import { v4 as uuidv4 } from 'uuid'

//GET
export const getAllPostModel = async () => {
    try {
        const result = await pool.query({ text: 'SELECT * FROM posts' })
        return result.rows
    } catch (error) {
        throw new Error('Error al obtener los posts desde la base de datos')
    }
}

//POST
export const createPostModel = async ({ titulo, img, descripcion, likes = 0 }) => {
    try {
        const sql = {
            text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *',
            values: [titulo, img, descripcion, likes]
        }
        const result = await pool.query(sql)
        return result.rows[0]
    } catch (error) {
        throw new Error('Error al crear el post')
    }
}

//PUT
export const updatePostModel = async (id) => {
    try {
        const sql = {
            text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
            values: [id]
        }
        const result = await pool.query(sql)
        return result.rows[0]
    } catch (error) {
        throw new Error('Error al actualizar el like del post')
    }
}

//DELETE
export const deletePostModel = async (id) => {
    try {
        const sql = {
            text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
            values: [id]
        }
        const result = await pool.query(sql)
        return result.rowCount
    } catch (error) {
        throw new Error('Error al eliminar el post')
    }
}


