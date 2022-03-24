import { MongoClient, ObjectId } from 'mongodb';


const URI = 'mongodb+srv://jkoki91:8rXYq9Xp4cQKTEv@w-cluster.t5ly7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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
        client.close();
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
            password,
            status: 'SUCCESS'
        }
        return await users.findOne(query);
    } catch (err) {
        console.error(err);
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


export const updateEmail = async (id,email) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const users = db.collection(COLLECTION_NAME);
        // const options = { projection: { _id: 0, password: 0, status: 0 } }
        const userEmail = await users.updateOne({"_id":ObjectId(id)},{$set:email});
        // return await users.updateOne({"_id":ObjectId(id)},{$set:email});;
        return userEmail ?? undefined;
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


// para el crud del usuario

// app.delete('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const userIndex = users.findIndex(user => user.id === id);
//     if (userIndex === -1) {
//         res.sendStatus(404);
//     } else {
//         users.splice(userIndex, 1);
//         await writeFile(usersFile, JSON.stringify(users, null, 2));
//         res.status(204);
//     }
// })

// app.patch('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const newBody = req.body;
//     const userIndex = users.findIndex(user => user.id === id);
//     if (userIndex === -1) {
//         res.sendStatus(404);
//     } else {
//         users[userIndex] = {
//             ...users[userIndex],
//             ...newBody
//         }
//         await writeFile(usersFile, JSON.stringify(users, null, 2));
//         res.status(200).json(users[userIndex]);
//     }
// })


// export const deleteBookCtrl = async (req, res) => {
//     let { isbn } = req.params;
//     isbn = parseInt(isbn);
//     const book = await retrieveBookByISBN(isbn);
//     if (book !== undefined) {
//         await deleteBook(book);
//         res.status(201).json(book);
//     } else {
//         res.status(400).send('this book doesnt exist');
//     }
// }
export const retrieveBookByISBN = async ISBN => {
    try {
        console.log(ISBN);
        await client.connect();
        const db = client.db(DB_NAME);
        const booksCollection = db.collection(COLLECTION_NAME);
        let query = { ISBN };
        console.log('query', query);
        const book = await booksCollection.findOne(query);
        return book ?? undefined;
    } catch (err) {
        console.error('Retrieve Book By ISBN error: ', err);
    } finally {
        await client.close();
    }
}
