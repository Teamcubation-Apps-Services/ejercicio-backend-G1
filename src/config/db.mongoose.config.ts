import mongoose from "mongoose";

const db = async () => {
	try {
		await mongoose.connect(process.env.DB_MONGO_HOST!);
		console.log("DB Mongo connected!");
	} catch (error) {
		console.log(error);
	}
};

export default db;