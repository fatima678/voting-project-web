const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const VotingModel = require('./models/Voting');
// server/index.js

const CandidateModel = require('./models/Candidate');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://softwarechaser4:software@cluster0.26od2df.mongodb.net/?retryWrites=true&w=majority&appName=test").then(user => {
    console.log("connected Successfully");
})
.catch(err => {
   console.log(err.message);
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    VotingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("incorrect_password");
                }
            } else {
                res.json("invalid_email");
            }
        })
        .catch(err => {
            res.status(500).json("server_error");
        });
});

app.post('/register', (req, res) => {
    VotingModel.create(req.body)
        .then(votings => res.json(votings))
        .catch(err => res.json(err));
});
// server/index.js
app.post('/register-candidate', (req, res) => {
    // Assuming you have a Candidate model
    CandidateModel.create(req.body)
        .then(candidate => res.json(candidate))
        .catch(err => res.json(err));
});
app.get('/candidates', (req, res) => {
    CandidateModel.find()
        .then(candidates => res.json(candidates))
        .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
    console.log("server is running");
});