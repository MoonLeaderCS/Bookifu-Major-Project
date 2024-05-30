const mongoose = require('mongoose');
// import express from "express";
const express = require('express');

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

// const app=express()
// const connectWithDB=async()=>{
//   try {
//       await mongoose.connect(process.env.DB_URL);
//       console.log("connected to mongo");
//     } catch (error) {
//       throw error
//     }
//   };

// app.listen(4000,()=>{
//   connectWithDB()
//   console.log("conected")
// });

module.exports = connectWithDB;
