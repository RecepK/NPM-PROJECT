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


export {
    register
}