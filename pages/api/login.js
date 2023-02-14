import { MongoClient } from "mongodb";

export default async function helper(req,res) 
{
    if(req.method !== 'POST')
    {
        return;
    }
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
        const result = await db.collection('admin').findOne({email: email});
        if(result)
        {
            if(result.password === password)
            {
                res.json({message: "successful login"})
            }
            else
            {
                res.json({message: "password doesnot match"})
            }
        }
        else
        {
            res.json({message: 'user not found'})
        }
    }
    else
    {
        const result = await db.collection('user').findOne({email: email});
        if(result)
        {
            if(result.password === password)
            {
                res.json({message: "successful login"})
            }
            else
            {
                res.json({message: "password doesnot match"})
            }
        }
        else
        {
            res.json({message: 'user not found'})
        }
    }
}