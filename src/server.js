const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/blogDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const postSchema = new mongoose.Schema({
    title: String,
    body: String
});

const Post = mongoose.model('Post', postSchema);

app.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        if (!err) {
            res.send(posts);
        }
    });
});

app.get('/posts/:postId', (req, res) => {
    Post.findOne({_id: req.params.postId}, (err, post) => {
        if (!err) {
            res.send(post);
        }
    });
});

app.post('/compose', (req, res) => {
    const newPost =  new Post ({
		title: req.body.title,
		body: req.body.body
	});

	newPost.save(function(err) {
		if(err) {
			console.log(err);
		}
	});
});

app.listen(8080, function() {
  console.log("Server started on port 8080");
});