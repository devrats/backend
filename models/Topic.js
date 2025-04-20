import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  title: String,
  level: String,
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
  opted: Boolean
});

const topicSchema = new mongoose.Schema({
  title: String,
  problems: [problemSchema]
});

export const Topic = mongoose.model('Topic', topicSchema);