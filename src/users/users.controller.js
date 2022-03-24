import express from 'express';
import { retrieveUserInfoByEmail } from './users.model.js';
import { deleteUserByEmail } from './users.model.js';
import { updateEmail, updateName, updateUserName, updateAge} from './users.model.js';
import fs from 'fs'

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const removeUser = async (req,res)=>{
    try {
        const user = await deleteUserByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
export const updateEmailCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        email:req.body.data
    }
    // const jsonUser = JSON.parse(userNew)
    const user = await updateEmail(id,userNew);
    res.json(user)
    // try {
    //     const user = await updateEmail(req.email);
    //     res.json(user); // deveulvo la info del usuario
    // } catch (err) {
    //     console.error(err);
    //     res.sendStatus(500);
    // }
}

export const updateNameCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        name:req.body.data,
    }
    console.log(req.body)
    const user = await updateName(id,userNew);
    res.json(user)
}
export const updateUserNameCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        username:req.body.data
    }
    const user = await updateUserName(id,userNew);
    res.json(user)
}
export const updateAgeCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        age:req.body.data
    }
    const user = await updateAge(id,userNew);
    res.json(user)
}


export const updateImageCtrl = (req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send('Enviado')
}