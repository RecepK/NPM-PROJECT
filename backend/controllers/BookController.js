import express from 'express';
import Book from '../models/Book.js';

const createBook = async (req, res) => {
    try {
        const {
            title
        } = req.body;

        const book = await Book.findOne({
            title
        });

        if (book) {
            return res
                .status(400)
                .json({
                    error: 'Book exist.'
                });
        }

        const newBook = await Book.create(req.body);
        return res
            .status(201)
            .json({
                message: "create Book"
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res
            .status(201)
            .json(books);
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
};


const getBook = async (req, res) => {
    try {
        const {
            id,
            title
        } = req.body;

        const book = await Book.findOne({
            title
        });

        console.log(book);

        if (!book) {
            return res
                .status(400)
                .json({
                    error: 'Book not exist.'
                });
        }

        return res
            .status(201)
            .json(book);
    } catch (error) {
        return res
            .status(500)
            .json({
                error: 'Error.'
            });
    }
};

export {
    createBook,
    getBooks,
    getBook
}