import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import InputControl from "./InputControl";
import styles from "./Editor.module.css";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!tempValues.points) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(value) => setValues((prev) => ({ ...prev, title: value }))}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, companyName: value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, startDate: value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(value) => setValues((prev) => ({ ...prev, endDate: value }))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(value) => handlePointUpdate(value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(value) => handlePointUpdate(value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(value) => handlePointUpdate(value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. Chat app"
          onChange={(value) => setValues((prev) => ({ ...prev, title: value }))}
        />
      </div>
      <InputControl
        label="Overview"
        value={values.overview}
        placeholder="Enter basic overview of project"
        onChange={(value) => setValues((prev) => ({ ...prev, overview: value }))}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          value={values.link}
          placeholder="Enter deployed link of project"
          onChange={(value) => setValues((prev) => ({ ...prev, link: value }))}
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter github link of project"
          onChange={(value) => setValues((prev) => ({ ...prev, github: value }))}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(value) => handlePointUpdate(value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(value) => handlePointUpdate(value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(value) => handlePointUpdate(value, 2)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter title eg. B-tech"
          onChange={(value) => setValues((prev) => ({ ...prev, title: value }))}
        />
      </div>
      <InputControl
        label="College/School Name"
        value={values.college}
        placeholder="Enter name of your college/school"
        onChange={(value) => setValues((prev) => ({ ...prev, college: value }))}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, startDate: value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(value) => setValues((prev) => ({ ...prev, endDate: value }))}
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name"
          value={values.name}
          onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
        />
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={(value) => setValues((prev) => ({ ...prev, title: value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={(value) =>
            setValues((prev) => ({ ...prev, linkedin: value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter your github profile link"
          onChange={(value) => setValues((prev) => ({ ...prev, github: value }))}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(value) => setValues((prev) => ({ ...prev, email: value }))}
        />
        <InputControl
          label="Phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(value) => setValues((prev) => ({ ...prev, phone: value }))}
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(value) => handlePointUpdate(value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(value) => handlePointUpdate(value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(value) => handlePointUpdate(value, 2)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(value) => setValues((prev) => ({ ...prev, summary: value }))}
      />
    </div>
  );

  const skillsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your skills</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(value) => handlePointUpdate(value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(value) => handlePointUpdate(value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(value) => handlePointUpdate(value, 2)}
        />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.skills:
        return skillsBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details?.[0]?.overview || "",
      link: activeInfo?.details?.[0]?.link || "",
      github: activeInfo?.details?.[0]?.github || "",
      title: activeInfo?.details?.[0]?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: activeInfo?.detail || "",
      points: activeInfo?.points || ["", "", ""],
      startDate: activeInfo?.details?.[0]?.startDate || "",
      endDate: activeInfo?.details?.[0]?.endDate || "",
      companyName: activeInfo?.details?.[0]?.companyName || "",
      college: activeInfo?.details?.[0]?.college || "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;

    const lastDetail = details[details.length - 1] || {};
    const newDetail = {
      title: "",
      overview: "",
      link: "",
      github: "",
      points: ["", "", ""],
      startDate: "",
      endDate: "",
      companyName: "",
      college: "",
      ...lastDetail,
    };

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: [...details, newDetail],
      },
    }));
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details;
    if (!details) return;

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details.filter((_, i) => i !== index),
      },
    }));
  };

  const handleSave = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          title: values.title,
          companyName: values.companyName,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };
        const tempDetails = activeInformation?.details || [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          title: values.title,
          overview: values.overview,
          link: values.link,
          github: values.github,
          points: values.points,
        };
        const tempDetails = activeInformation?.details || [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = activeInformation?.details || [];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points || [];

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
          },
        }));
        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
          },
        }));
        break;
      }
      case sections.skills: {
        const tempPoints = values.points || [];

        props.setInformation((prev) => ({
          ...prev,
          [sections.skills]: {
            ...prev[sections.skills],
            points: tempPoints,
          },
        }));
        break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <div className={styles.chips}>
          {activeInformation?.details?.map((item, index) => (
            <div
              className={`${styles.chip} ${
                activeDetailIndex === index ? styles.active : ""
              }`}
              key={item.title + index}
              onClick={() => setActiveDetailIndex(index)}
            >
              <p>
                {sections[activeSectionKey]} {index + 1}
              </p>
              <X onClick={(e) => {
                e.stopPropagation();
                handleDeleteDetail(index);
              }} />
            </div>
          ))}
          {activeInformation?.details && activeInformation.details.length < 3 && (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          )}
        </div>

        {generateBody()}

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
