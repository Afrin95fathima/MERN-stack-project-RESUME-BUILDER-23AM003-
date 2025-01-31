import React, { useRef } from 'react';
import { 
    Container, 
    Paper, 
    Typography, 
    Box, 
    Divider,
    List,
    ListItem,
    ListItemText,
    Button
} from '@mui/material';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import DownloadIcon from '@mui/icons-material/Download';

const ResumePreview = ({ data }) => {
    const resumeRef = useRef(null);

    const downloadPDF = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;

        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('resume.pdf');
    };

    if (!data) return null;

    return (
        <Container maxWidth="md">
            <Box sx={{ mb: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    onClick={downloadPDF}
                    fullWidth
                >
                    Download PDF
                </Button>
            </Box>
            <Paper elevation={3} sx={{ p: 4, my: 4 }} ref={resumeRef}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        {data.personalInfo.fullName}
                    </Typography>
                    <Typography variant="body1">
                        {data.personalInfo.email} | {data.personalInfo.phone}
                    </Typography>
                    <Typography variant="body1">
                        {data.personalInfo.address}
                    </Typography>
                    {data.personalInfo.linkedin && (
                        <Typography variant="body1">
                            LinkedIn: {data.personalInfo.linkedin}
                        </Typography>
                    )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Education */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Education
                    </Typography>
                    {data.education.map((edu, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h6">
                                {edu.institution}
                            </Typography>
                            <Typography variant="body1">
                                {edu.degree} in {edu.field}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Graduation Year: {edu.graduationYear} | GPA: {edu.gpa}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Experience */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Professional Experience
                    </Typography>
                    {data.experience.map((exp, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h6">
                                {exp.company}
                            </Typography>
                            <Typography variant="subtitle1">
                                {exp.position}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {exp.startDate} - {exp.endDate}
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                {exp.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Skills */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Skills
                    </Typography>
                    <List dense>
                        {data.skills.map((skill, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={skill} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Projects */}
                {data.projects && data.projects.length > 0 && (
                    <>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h5" gutterBottom>
                                Projects
                            </Typography>
                            {data.projects.map((project, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Typography variant="h6">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Technologies: {project.technologies}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {project.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default ResumePreview;
