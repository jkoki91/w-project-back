import express from 'express';
import { retrieveUserInfoByEmail, retrieveUsersByName } from './users.model.js';
import { deleteUserByEmail,retrieveFollowedUsers } from './users.model.js';
import { updateImg, updateName, updateUserName, updateAge, updateFollow, updateFollowers, updatePost } from './users.model.js';
import fs from 'fs'

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
        // console.log(req)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
} 

export const getUsers = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUsersByName(req.params);
        // console.log(req.params)
        // console.log('Hola bpdy',req.body)
        res.json(user); // deveulvo los usuarios con ese nombre
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

export const updateNameCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        name:req.body.data,
    }
    // console.log(req.body)
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

export const updateFollowCtrl = async (req,res)=>{
    console.log('hola',req.body)
    console.log('hola data',req.body.data)
    // console.log(req.params)
    const {id}=req.params
    const userNew ={
        follow:req.body.data
    }
    const user = await updateFollow(id,userNew);
    res.json(user)
}

export const updateFollowersCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        followers:req.body.data
    }
    const user = await updateFollowers(id,userNew);
    res.json(user)
}

export const patchPostsCtrl = async (req,res)=>{
    const {id}=req.params
    const userNew ={
        posts:req.body.data
    }
    const user = await updatePost(id,userNew);
    res.json(user)
}


export const updateImageCtrl = (req,res)=>{
    const {id}=req.params
    console.log(req.params)
    console.log(req.body.fileTitle)//nombre escrito
    const userNew ={
        img:req.file.filename
    }
    const user = updateImg(id,userNew);
    res.json(user)
    console.log(req.file.filename)//nombre original de la imagen
    console.log(req.body)
    res.send('Enviado')
    
}


export const getUsersFollowed = async (req, res) => {
    // llamo al usuario
    try {
        console.log(req.params)
        const user = await retrieveFollowedUsers(req.params);
        // console.log(req.params)
        // console.log('Hola bpdy',req.body)
        res.json(user); // deveulvo los usuarios con ese nombre
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}