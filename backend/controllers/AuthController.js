import express from 'express';
import User from '../models/User.js';

const register = async (req, res) => {
    try {
        const {email} = req.body;

        const existingEmail = await User.findOne({email});

        if (existingEmail) {
            return res
                .status(400)
                .json({
                    error: 'Email exist.'
                });
        }

        const newUser = await User.create(req.body);

        return res
            .status(201)
            .json({
                message: 'User created.'
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
};


const login = async (req, res) => {
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return res
                .status(404)
                .json({
                    error: 'User not found.'
                });
        }

        const isValidPassword = (password == user.password);
        if (!isValidPassword) {
            return res
                .status(401)
                .json({
                    error: 'Password wrong.'
                });
        }

        return res
            .status(201)
            .json({
                error: 'User Login'
            });
    } catch (error) {}
};



const users = async (req, res) => {
    const Users = await User.find();

    return res
        .status(201)
        .json(Users);
}

export {
    register,
    login,
    users
}