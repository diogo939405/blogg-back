const express = require('express');
const mongoose = require('mongoose');
const DataModel = require("./User.js");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Obter todos os projetos
app.get('/project', async (req, res) => {
    try {
        const projects = await DataModel.find({});
        return res.json(projects);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Obter um projeto por ID
app.get('/project/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await DataModel.findById(id);

        if (!project) {
            return res.status(404).json({ error: "Projeto não encontrado" });
        }

        return res.json(project);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Criar um novo projeto
app.post('/project', async (req, res) => {
    try {
        const data = req.body;

        // Validar o conteúdo dos capítulos (opcional)
        if (!data.capitulos || !Array.isArray(data.capitulos)) {
            return res.status(400).json({ error: "Capítulos devem ser um array" });
        }

        const project = new DataModel(data);
        await project.save();
        return res.status(201).json(project);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Deletar um projeto por ID
app.delete('/project/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const projectDelete = await DataModel.findByIdAndDelete(id);

        if (!projectDelete) {
            return res.status(404).json({ error: "Projeto não encontrado" });
        }

        return res.json(projectDelete);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// Conexão com o banco de dados
mongoose.connect('mongodb+srv://diogoBlog:MnELDhks9C15YVms@blogcluster.5myox.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Connection failed', err);
    });

// Inicializar o servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
