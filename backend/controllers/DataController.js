import express from 'express';
import User from '../models/User.js';


const getAllData = async (req, res) => {
    const Users = await User.find();

    return res
        .status(201)
        .json(Users);
}


export {
    getAllData
}