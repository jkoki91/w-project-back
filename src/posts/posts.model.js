import { MongoClient, ObjectId } from 'mongodb';

// const {DB_PW} = process.env;
// const URI = `mongodb+srv://jkoki91:${process.env.DB_PW}@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URI = 'mongodb+srv://jkoki91:8rXYq9Xp4cQKTEv@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'w-dataBase';
const COLLECTION_NAME = 'posts';

export const createPost = async (posts) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const post = db.collection(COLLECTION_NAME);
        const userPosts = {
            email:posts,
            posts:[]
        }
        return await post.insertOne(userPosts);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

export const updatePosts = async (id,posts) => { //subir los posts 

    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const postsColl = db.collection(COLLECTION_NAME);
        // console.log(posts) 
        const post = posts
        console.log('esto es lo que hay que subir',post)
        // const postsSet = await postsColl.updateOne({"_id":ObjectId(id)},{$set:{posts}});
        const postsSet = await postsColl.updateOne({"_id":ObjectId(id)},{$push:{posts}});
        return postsSet ?? undefined;
    } catch (err) {
        console.error('Retrieve posts error: ', err);
    } finally {
        client.close(); 
    }
}

 
export const retrievePostInfoByEmail = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { email };
        console.log('hola')
        console.log(query)
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        // const options = { projection: { password: 0, status: 0 } }
        // return await users.findOne(query, options);
        return await users.findOne(query);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

export const retrievePostInfoById = async (id) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = {"_id":ObjectId(id)};
        console.log('hola model')
        console.log(query)
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        // const options = { projection: { password: 0, status: 0 } }
        // return await users.findOne(query, options);
        return await users.findOne(query);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}


export const retrievePostInfoByEmail2 = async (email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        const query = { email:email.id };
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        // const options = { projection: { password: 0, status: 0 } }
        return await users.findOne(query);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}