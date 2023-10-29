import { fetch, fetchAll } from "../../utils/db.js"

const getModelBanner = async () => {
    return await fetchAll('SELECT * FROM banner')
}

const getByIdModelBanner = async (id) => {
    return await fetch('SELECT * FROM banner WHERE banner_id = $1',[id])
}

const postModelBanner = async (title, img) => {
    console.log(title, img);
    return await fetch(`INSERT INTO banner(title, img) VALUES ($1,$2) returning *`,[title, img])
}

const putModelBanner = async (title, img, id) => {
    return await fetch(`UPDATE banner SET title = $1, img = $2 WHERE banner_id = $3`,[title, img, id])

}

const delModelBanner = async (id) => {
    return await fetch('DELETE FROM banner WHERE banner_id = $1 returning *', [id])
}

export {
    getModelBanner,
    getByIdModelBanner,
    postModelBanner,
    putModelBanner,
    delModelBanner
}