import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    Grid,
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        personalInfo: {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            linkedin: ''
        },
        education: [{
            institution: '',
            degree: '',
            field: '',
            graduationYear: '',
            gpa: ''
        }],
        experience: [{
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        }],
        skills: [''],
        projects: [{
            name: '',
            description: '',
            technologies: ''
        }]
    });

    const handlePersonalInfoChange = (e) => {
        setFormData({
            ...formData,
            personalInfo: {
                ...formData.personalInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleArrayFieldChange = (index, field, subfield, value) => {
        const newData = { ...formData };
        newData[field][index][subfield] = value;
        setFormData(newData);
    };

    const addArrayField = (field) => {
        const newData = { ...formData };
        if (field === 'skills') {
            newData.skills.push('');
        } else {
            newData[field].push({
                ...(field === 'education' ? {
                    institution: '',
                    degree: '',
                    field: '',
                    graduationYear: '',
                    gpa: ''
                } : field === 'experience' ? {
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                } : {
                    name: '',
                    description: '',
                    technologies: ''
                })
            });
        }
        setFormData(newData);
    };

    const removeArrayField = (field, index) => {
        const newData = { ...formData };
        newData[field].splice(index, 1);
        setFormData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/resume', formData);
            console.log('Resume saved:', response.data);
            // Handle success (e.g., show success message, redirect to preview page)
        } catch (error) {
            console.error('Error saving resume:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, my: 4 }}>
                <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <Typography variant="h5" gutterBottom>Personal Information</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="fullName"
                                value={formData.personalInfo.fullName}
                                onChange={handlePersonalInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={formData.personalInfo.email}
                                onChange={handlePersonalInfoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                value={formData.personalInfo.phone}
                                onChange={handlePersonalInfoChange}
                            />
                        </Grid>
                    </Grid>

                    {/* Education */}
                    <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Education</Typography>
                    {formData.education.map((edu, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Institution"
                                        value={edu.institution}
                                        onChange={(e) => handleArrayFieldChange(index, 'education', 'institution', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Degree"
                                        value={edu.degree}
                                        onChange={(e) => handleArrayFieldChange(index, 'education', 'degree', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Field of Study"
                                        value={edu.field}
                                        onChange={(e) => handleArrayFieldChange(index, 'education', 'field', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <IconButton onClick={() => removeArrayField('education', index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        startIcon={<AddIcon />}
                        onClick={() => addArrayField('education')}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        Add Education
                    </Button>

                    {/* Experience */}
                    <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Experience</Typography>
                    {formData.experience.map((exp, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Company"
                                        value={exp.company}
                                        onChange={(e) => handleArrayFieldChange(index, 'experience', 'company', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Position"
                                        value={exp.position}
                                        onChange={(e) => handleArrayFieldChange(index, 'experience', 'position', e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        label="Description"
                                        value={exp.description}
                                        onChange={(e) => handleArrayFieldChange(index, 'experience', 'description', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <IconButton onClick={() => removeArrayField('experience', index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        startIcon={<AddIcon />}
                        onClick={() => addArrayField('experience')}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        Add Experience
                    </Button>

                    {/* Skills */}
                    <Typography variant="h5" sx={{ mt: 4 }} gutterBottom>Skills</Typography>
                    {formData.skills.map((skill, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Skill"
                                        value={skill}
                                        onChange={(e) => {
                                            const newSkills = [...formData.skills];
                                            newSkills[index] = e.target.value;
                                            setFormData({ ...formData, skills: newSkills });
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <IconButton onClick={() => removeArrayField('skills', index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        startIcon={<AddIcon />}
                        onClick={() => addArrayField('skills')}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        Add Skill
                    </Button>

                    <Box sx={{ mt: 4 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            Generate Resume
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default ResumeForm;
