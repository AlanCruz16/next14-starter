const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Connection already exists");
          return;
        }
        const db = await mongoose.connect(process.env.MONGO);
      } catch (error) {
        console.log(error);
        throw new Error("Could not connect to database");
      }
}