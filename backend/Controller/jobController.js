const Job = require('../Models/jobSchema');

// Create job
const createJob = (req, res) => {
  const { title, description, location, salary, tags } = req.body;
  const employer = req.decoded.id;

  const job = new Job({
    title,
    description,
    tags,
    location,
    salary,
    employer
  });

  job.save()
    .then(result => {
      res.status(201).json({
        message: 'Job created successfully',
        jobId: result._id
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


const searchJobs = (req, res) => {
  const keyword = req.query.keyword; // Get the search keyword from the query string
  const regex = new RegExp(keyword, 'i'); // Create a regular expression to match the keyword case-insensitively

  Job.find({ $or: [ { title: regex } ] }) // Find all jobs that match the keyword in the title, description, or tags
    .then(jobs => {
      res.status(200).json(jobs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


// Update job
const updateJob = (req, res) => {
  const id = req.params.id;
  const employer = req.decoded.id
  const { title, description, location, salary, tags } = req.body;

  Job.findOne({ _id: id, employer: employer })
    .then(job => {
      if (!job) {
        return res.status(404).json({
          message: 'Job not found'
        });
      }
      job.title = title || job.title;
      job.description = description ||  job.description;
      job.location = location || job.location;
      job.tags=tags||job.tags
      job.salary = salary || job.salary;
      return job.save();
    })
    .then(result => {
      res.status(200).json({
        message: 'Job updated successfully'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

const getEmployerJobs = (req, res) => {
  const employerId = req.decoded.id; // Get the employer ID from the decoded token

  Job.find({ employer: employerId }) // Find all jobs with the specified employer ID
    .then(jobs => {
      res.status(200).json(jobs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

// Delete job
const deleteJob = (req, res) => {
  const jobId = req.params.jobId;

  Job.findByIdAndDelete(jobId)
    .then(result => {
      res.status(200).json({
        message: 'Job deleted successfully'
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

// Get jobs


const getAllJobs = (req, res) => {
  
  Job.find().then(jobs => {
      res.status(200).json(jobs);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

module.exports={getAllJobs,getEmployerJobs,updateJob,createJob,searchJobs}