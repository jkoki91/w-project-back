import {updatePosts, retrievePostInfoByEmail, retrievePostInfoById, retrievePostInfoByEmail2} from "./posts.model.js"


export const updatePostsCtrl = async (req,res)=>{
    const {id}=req.params
    // console.log('params',req.params)
    // console.log('body',req.body)
    console.log('nombre',req.file.filename)
    console.log('titulo',req.body.title)
    console.log('texto',req.body.text)
    const userNew ={
        // post:req.body,
        title:req.body.title,
        text:req.body.text,
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


export const getPostsInfoCtrl = async (req, res) => {
    // llamo al usuario
    try {
        console.log(req.params)
        const user = await retrievePostInfoByEmail2(req.params);
        res.json(user); // deveulvo la info del usuario
        // console.log(req)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
} 