import { MongoClient } from "mongodb";

const handler = async (req,res) => {

    const client = await MongoClient.connect('mongodb+srv://cronix:6166@cluster0.kwjblrz.mongodb.net/gasbookings?retryWrites=true&w=majority');
    const db = client.db();
    const bookingCollection = db.collection('bookings')

    if(req.method == 'POST')
    {
        const data = req.body;
        const results = await bookingCollection.insertOne(data);
        res.status(201).json({message: 'inserted Successfully'});
    }

    else if(req.method == 'GET')
    {
        const results = await bookingCollection.find().toArray();
        res.status(201).json({message: 'retrived successfully', data: results});
    }

    client.close();
}

export default handler;