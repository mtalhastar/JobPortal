const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
   required: true
  },
  description: {
    type: String,
    required: true
  },
  tags:{
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
module.exports = mongoose.model('Job', jobSchema);
