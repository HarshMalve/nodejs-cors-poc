'use strict';
const fs = require('fs');
const path = require('path');

const pathToDataFile = path.join(__dirname, '../data/books.json');

exports.fetchData = async function (req, res) {
    try {
        let rawData = fs.readFileSync(pathToDataFile);
        let books = {};
        rawData ? books = JSON.parse(rawData): [];
        res.status(200).json({
            status: true,
            msg: 'success',
            data: books
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            msg: error,
            data: []
        });
    }
};