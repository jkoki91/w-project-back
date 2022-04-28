import { MongoClient, ObjectId } from 'mongodb';

// const {DB_PW} = process.env;
// console.log('La clave de mongo es:',process.env.DB_PW)
const URI = `mongodb+srv://jkoki91:${process.env.DB_PW}@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const URI = 'mongodb+srv://jkoki91:8rXYq9Xp4cQKTEv@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'w-dataBase';
const COLLECTION_NAME = 'users';

export const createUser = async (user) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        return await users.insertOne(user);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

// devuelve el usuario sin tener en cuenta el status o null si no existe
export const getUserByEmailNoStatus = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        return await users.findOne({ email });
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

// actualiza el usuario cambiando su estaso a success
export const validateUser = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        // create a document that sets the plot of the movie
        const updateDoc = {
            $set: {
                status: 'SUCCESS'
            },
        };
        return await users.updateOne({ email }, updateDoc);
    } catch (err) {
        console.error(err);
    } finally {
        // client.close();
    }
}

// devuelve el usuario de BBDDD que esté en estado succes y además coincida
// con el email y con password que me mandan. 
export const retrieveSuccessUserByEmailAndPassword = async (email, password) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = {
            email,
            password
            // status: 'SUCCESS'
        }
        return await users.findOne(query);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}


export const retrieveUserInfoByEmail = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { email };
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        const options = { projection: { password: 0, status: 0 } }
        return await users.findOne(query, options);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

export const retrieveUsersByName = async (name) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { name };
        const options = {
            projection: { password: 0, status: 0 }
        };
        // const usersList = await users.find(query, options).toArray()
        const usersList = await users.find({}, options).toArray()
        // console.log(usersList)
        return usersList
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

export const deleteUserByEmail = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { email };
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        return await users.deleteOne(query); //el segundo parametro es un callbacK entonces si pones segundo parametro ya no hace falta el await porque estas gestionando la asincronia con un callback
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}


export const updateImg = async (id,img) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const userImg = await users.updateOne({"_id":ObjectId(id)},{$set:img});
        // return await users.updateOne({"_id":ObjectId(id)},{$set:Img});;
        return userImg ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}

export const updateName = async (id,name) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const userName = await users.updateOne({"_id":ObjectId(id)},{$set:name});
        return userName ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}
export const updateUserName = async (id,username) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const userUserName = await users.updateOne({"_id":ObjectId(id)},{$set:username});
        return userUserName ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}
export const updateAge = async (id,age) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const userAge = await users.updateOne({"_id":ObjectId(id)},{$set:age});
        return userAge ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}
export const updateFollow = async (id,follow) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        console.log(follow)
        const userFollow = await users.updateOne({"_id":ObjectId(id)},{$set:follow});
        return userFollow ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}

export const updateFollowers = async (id,followers) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        console.log(followers)
        const userFollowers = await users.updateOne({"_id":ObjectId(id)},{$set:followers});
        return userFollowers ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}

export const updatePost = async (id,posts) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        console.log(posts)
        const userPosts = await users.updateOne({"_id":ObjectId(id)},{$set:posts});
        return userPosts ?? undefined;
    } catch (err) {
        console.error('Retrieve users error: ', err);
    } finally {
        client.close();
    }
}


export const retrieveFollowedUsers = async (id) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { "_id":ObjectId(id) };
        const options = {
            projection: { password: 0, status: 0 }
        };
        const usersList = await users.find(query, options).toArray()
        // const usersList = await users.find({}, options).toArray()
        // console.log(usersList)
        return usersList
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}