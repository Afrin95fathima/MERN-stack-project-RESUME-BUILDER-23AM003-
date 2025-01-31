import React, { useState } from "react";
import Editor from "./Editor";
import Resume from "./Resume";
import styles from "./Body.module.css";
import { useReactToPrint } from 'react-to-print';
import axios from 'axios';

function Body({ sections, information, setInformation }) {
  const [message, setMessage] = useState('');
  const [resumeId, setResumeId] = useState(null);
  const resumeRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const saveToDatabase = async () => {
    try {
      let response;
      if (resumeId) {
        response = await axios.put(`http://localhost:5000/api/resume/${resumeId}`, information);
      } else {
        response = await axios.post('http://localhost:5000/api/resume', information);
        setResumeId(response.data._id);
      }
      setMessage('Resume saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving resume. Please try again.');
      console.error('Error saving resume:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Editor 
          sections={sections} 
          information={information} 
          setInformation={setInformation} 
        />
        <div className={styles.buttonContainer}>
          <button onClick={saveToDatabase} className={styles.saveBtn}>
            Save Resume
          </button>
          <button onClick={handlePrint} className={styles.downloadBtn}>
            Download PDF
          </button>
        </div>
        {message && (
          <div className={`${styles.alert} ${message.includes('Error') ? styles.error : styles.success}`}>
            {message}
          </div>
        )}
      </div>
      <div className={styles.resumePreview}>
        <Resume 
          ref={resumeRef}
          sections={sections}
          information={information} 
        />
      </div>
    </div>
  );
}

export default Body;
