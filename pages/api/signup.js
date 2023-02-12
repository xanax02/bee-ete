import { MongoClient } from "mongodb";

export default async function handler(req,res) {
    const client = await MongoClient.connect('mongodb+srv://cronix:6166@cluster0.kwjblrz.mongodb.net/gasbookings?retryWrites=true&w=majority')
    const db = client.db();
    const { email, password, isAdmin} = req.body;

    if(!email || !email.includes('@') || !password || password.trim().length<7)
    {
        res.status(422).json({message: "invalid username or password"});
        return;
    }

    if(isAdmin)
    {
        const result = await db.collection('admin').insertOne(
            {
                email,
                password,
            }
        )
    }
    else
    {
        const result = await db.collection('user').insertOne(
            {
                email,
                password,
            }
        )
    }

    res.status(201).json({message: 'successfully registered'});
}