import {MongoClient} from 'mongodb';

async function handler(req, res) {
if(req.method === 'POST') {
const userEmail = req.body.email;

if(!userEmail || !userEmail.includes('@')) {
res.status(422).json({messsage: 'Invalid email address.' }); 
return;
}

const client = await MongoClient.connect('mongodb+srv://Olga:CLfSZuhZnK28Haar@cluster0.7rq95ua.mongodb.net/?retryWrites=true&w=majority') 

const db = client.db('events');

await db.collection('newsletter').insertOne({email: userEmail });

client.close();

res.status(201).json({messsage: 'Signed up!'});
}
 
}

export default handler;
