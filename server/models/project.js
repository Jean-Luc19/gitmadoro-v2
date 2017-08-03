const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {type: String, required: true},
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
