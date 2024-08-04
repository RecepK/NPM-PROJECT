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


export {
    getReq,
    postReq
}