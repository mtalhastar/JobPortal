const express = require('express');
const router = express.Router();
const {DecodeUser,checkEmployer,checkStudent,checkAdmin}=require("../middleware/auth")
const {
  getApplications,
  updateApplications,
  deleteApplications,
  getAllApplications,
  createJobApplication
} = require('../Controller/jobAppliController');

// Get all job applications
router.get('/jobApplications', DecodeUser,checkAdmin, getAllApplications);

// Create a new job application
router.post('/jobApplications/:jobId', DecodeUser,checkStudent,createJobApplication);

// Get job applications submitted to jobs posted by an employer
router.get('/jobApplications/employer', DecodeUser,checkEmployer,getApplications);

// Update a job application by ID
router.put('/jobApplications/:id', DecodeUser,checkEmployer, updateApplications);

// Delete a job application by ID
router.delete('/jobApplications/:id',DecodeUser,checkEmployer, deleteApplications);

module.exports = router;