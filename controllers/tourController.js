const fs = require('fs');
const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   requestedAt: req.requestedTime,
  //   results: tours.length,
  //   data: {
  //     tours,
  //   },
  // });
};

exports.createNewTour = async (req, res) => {
  try {
    //const testTour = new Tour();
    // testTour.save();

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};

exports.getTourById = (req, res) => {
  // const reqId = req.params.id * 1; // cast to number if we multiply any string to number 1
  // const tour = tours.find((ele) => ele.id === reqId);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour: 'Updated tour',
  //   },
  // });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
