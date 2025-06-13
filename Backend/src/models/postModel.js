import { text } from "express"
import pool from "../../db/config.js"
//import { v4 as uuidv4 } from 'uuid'

//GET
export const getAllPostModel = async () => {
    const sqlQuery = { text: 'SELECT * FROM posts' }
    const result = await pool.query(sqlQuery)
    console.log(result.rows)
    return result.rows
}

//POST
export const createPostModel = async ({ titulo, img, descripcion, likes = 0 }) => {
    //const newId = uuidv4()
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *',
        values: [titulo, img, descripcion, likes]
    }
    const result = await pool.query(sqlQuery)
    return result.rows[0]
}

//PUT
export const updatePostModel = async (id) => {
    const sqlQuery = {
        text: 'UPDATE posts SET likes = likes + 1  WHERE id= $1 RETURNING *',
        values: [id]
    }
    const result = await pool.query(sqlQuery)
    return result.rows[0]
}

//DELETE
export const deletePostModel = async (id) => {
    const sqlQuery = {
        text: 'DELETE FROM posts WHERE id = $1 RETURNING *',
        values: [id]
    }
    const result = await pool.query(sqlQuery)
    return result.rowCount
}


