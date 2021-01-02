const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose.connect(
    "mongodb+srv://haider028:haiderali@cluster0.0vtig.mongodb.net/mern-crud?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  console.log(`Database connected: ${connect.connection.host}`);
};

module.exports = connectDB;
