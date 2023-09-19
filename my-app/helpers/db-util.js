import { MongoClient } from "mongodb";

async function connectDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://Olga:CLfSZuhZnK28Haar@cluster0.7rq95ua.mongodb.net/?retryWrites=true&w=majority"
    );
  
    return client;
  }
  
  export async function insertDocument(client, collection, document) {
    const db = client.db("events");
  
   const result = await db.collection(collection).insertOne(document);
   return result;
  }

  export async function getAllDocuments(client, collection, sort) {
    const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

    return documents;
  }