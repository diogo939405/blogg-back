const express = require('express');
const mongoose = require('mongoose');
const DataModel = require("./User.js")
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


app.get('/project', async (req, res) => {
    try {
        const projects = await DataModel.find({});
        return res.json(projects);
    } catch (err) {
        return res.status(500).json({ error: err });
    }

});

app.get('/project/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await DataModel.findById(id);
        return res.json(project);
    }
    catch (err) {

    }
})

app.post('/project', async (req, res) => {
    const data = req.body;
    const project = await new DataModel(data);
    project.save();
    return res.json(project);
});

app.delete('/project/:id', async (req, res) => {
    const id = re.params.id;
    const projectDelete = await DataModel.findByIdAndDelete(id);
    return res.json(projectDelete);
})

mongoose.connect('mongodb+srv://diogoBlog:MnELDhks9C15YVms@blogcluster.5myox.mongodb.net/')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Connection failed', err);
    });
app.listen(3000);