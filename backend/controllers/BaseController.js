import express from 'express';

const getReq = async (req, res) => {
    return res
        .status(201)
        .json({
            message: "GET Response",
            state: true
        });
}

const postReq = async (req, res) => {
    return res
        .status(201)
        .json({
            message: "POST Response",
            state: true
        });
}

const getData = async (req, res) => {
    const data = ["deneme", "deneme 2", "deneme 3"];

    return res
        .status(201)
        .json({
            message: "message",
            data: data
        });
}


export {
    getReq,
    postReq,
    getData
}