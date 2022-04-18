import {MongoClient} from 'mongodb';

// const {DB_PW} = process.env;
// console.log('hola env', DB_PW)
// const URI = `mongodb+srv://jkoki91:${process.env.DB_PW}@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URI = 'mongodb+srv://jkoki91:8rXYq9Xp4cQKTEv@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'w-dataBase';
const COLLECTION_NAME = 'validity';

export const createValidationToken = async (token, userName) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.insertOne({ // asociamos el token al usuario en la BBDD
            token,
            user: userName
        });
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}

// devuelve el token o null si no existe
export const retrieveValidationToken = async (token) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.findOne({token});
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}

// borra el token de la BBDD
export const deleteValidationToken = async (token) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.deleteOne({token});
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}