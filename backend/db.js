const { MongoClient } = require("mongodb");

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://jyotismitadas365:root@cluster0.dispglj.mongodb.net/?retryWrites=true&w=majority";

const dbName = process.env.DB_NAME || "contactDb";
const collectionName = process.env.CONTACT_COLLECTION || "contactDetails";

const client = new MongoClient(mongoUri);
let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const saveContactDetails = async ({ name, phone, description }) => {
  if (!db) {
    throw new Error("Database is not connected");
  }

  const result = await db.collection(collectionName).insertOne({
    name: String(name).trim(),
    phone: String(phone).trim(),
    description: String(description).trim(),
    createdAt: new Date(),
  });

  return result;
};

module.exports = {
  connectDB,
  saveContactDetails,
};
