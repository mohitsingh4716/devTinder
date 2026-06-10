const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const connectDB= require('./config/database');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth');

const PORT=process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());



app.use("/", authRouter);




app.use("/",(req,res)=>{
    res.send("devTinder is live!");
})


// Connect to the database
connectDB()
  .then(() => {
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log('Server is running on port 3000');
    });
    
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  }); 

