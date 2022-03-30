import {updatePosts, retrievePostInfoByEmail, retrievePostInfoById} from "./posts.model.js"


export const updatePostsCtrl = async (req,res)=>{
    const {id}=req.params
    console.log('aqui')
    console.log(req.params)
    console.log(req.body)
    console.log(req.file.filename)
    const userNew ={
        post:req.body,
        img:req.file.filename
    }
    const user = await updatePosts(id,userNew);
    res.json(user)
    // res.send('Enviado')
}

export const getPostsCtrl = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrievePostInfoByEmail(req.email);
        console.log(req.email)
        res.json(user); // deveulvo la info de los posts del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const getPostsCtrlId = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrievePostInfoById(req.params);
        // console.log(req.params)
        res.json(user); // deveulvo la info de los posts del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}