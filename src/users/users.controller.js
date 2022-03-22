
import { retrieveUserInfoByEmail } from './users.model.js';
import { deleteUserByEmail } from './users.model.js';

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
export const updateInfor = async (req,res)=>{
    try {
        const user = await updateInfoyEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}