const JobApplication = require('../Models/jobApplication');
const Job = require('../Models/jobSchema')


const createJobApplication = async (req, res) => {
  try {

    const applicantId = req.decoded.id
    // Create a new job application object
    const jobApplication = new JobApplication({
      applicant: applicantId,
      jobId: req.params.jobId,
      resume: req.body.resume,
      coverMessage: req.body.coverMessage
    });

    // Save the job application to the database
    const savedJobApplication = await jobApplication.save();

    // Return the saved job application object
    res.status(201).json(savedJobApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all job applications
const getAllApplications = async (req, res) => {

  try {
    const jobApplications = await JobApplication.find();
    res.status(200).json(jobApplications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getApplications = async (req, res) => {
  const employer = req.decoded.id;

  try {
    const jobs = await Job.find({ employer: employer });
    const jobIds = jobs.map(job => job._id);
    const applications = await JobApplication.find({ jobId: { $in: jobIds } });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update a job application by ID
const updateApplications = async (req, res) => {
  const { id } = req.params;
    const {status} = req.body;
  try {
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      id,
      {status:status},
      { new: true }
    );
    res.status(200).json(updatedApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a job application by ID
const deleteApplications = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedApplication = await JobApplication.findByIdAndDelete(id);
    res.status(200).json(deletedApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getApplications,
  updateApplications,
  deleteApplications,
  getAllApplications,
  createJobApplication
};