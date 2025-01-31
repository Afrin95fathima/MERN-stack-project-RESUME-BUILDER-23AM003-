const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/resumeBuilder', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Resume Schema
const resumeSchema = new mongoose.Schema({
    basicInfo: {
        name: String,
        title: String,
        email: String,
        phone: String,
        linkedin: String,
        github: String
    },
    workExp: [{
        title: String,
        companyName: String,
        startDate: String,
        endDate: String,
        points: [String]
    }],
    project: [{
        title: String,
        overview: String,
        link: String,
        github: String,
        points: [String]
    }],
    education: [{
        title: String,
        college: String,
        startDate: String,
        endDate: String
    }],
    achievement: {
        points: [String]
    },
    summary: {
        detail: String
    },
    skills: {
        points: [String]
    }
}, {
    timestamps: true
});

const Resume = mongoose.model('Resume', resumeSchema);

// Routes
app.post('/api/resume', async (req, res) => {
    try {
        const newResume = new Resume(req.body);
        await newResume.save();
        res.status(201).json(newResume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/resume/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.put('/api/resume/:id', async (req, res) => {
    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json(updatedResume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/api/resume/:id', async (req, res) => {
    try {
        const deletedResume = await Resume.findByIdAndDelete(req.params.id);
        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json({ message: 'Resume deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all resumes
app.get('/api/resumes', async (req, res) => {
    try {
        const resumes = await Resume.find().sort({ createdAt: -1 });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
