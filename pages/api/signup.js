import { MongoClient } from "mongodb";

export default async function handler(req,res) {
    const client = await MongoClient.connect('mongodb+srv://cronix:6166@cluster0.kwjblrz.mongodb.net/gasbookings?retryWrites=true&w=majority')
    const db = client.db();
    const { email, password, userType} = req.body;

    let userCollection;
    if(userType === 'admin')
    {
        userCollection = db.collection('admin');
    }
    else if(userType === 'user')
    {
        userCollection = db.collection('user');
    }

    if(!email || !email.incluse('@') || !password || password.trim().length<7)
    {
        res.status(422).json({message: "invalid username or password"});
        return;
    }

    const result = await db.collection(userCollection).insertOne(
        {
            email,
            password
        }
    )

    res.status(201).json({message: 'successfully registered'});
}