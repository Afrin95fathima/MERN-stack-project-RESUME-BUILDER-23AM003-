import React, { forwardRef } from "react";
import styles from "./Resume.module.css";
import logo from "../assets/eshwar_logo.jpg";

const Resume = forwardRef(({ sections, information }, ref) => {
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Eshwar Logo" className={styles.logo} />
        </div>
        <div className={styles.headerContent}>
          <p className={styles.heading}>
            {information[sections.basicInfo]?.detail?.name}
          </p>
          <p className={styles.subHeading}>
            {information[sections.basicInfo]?.detail?.title}
          </p>

          <div className={styles.links}>
            {information[sections.basicInfo]?.detail?.email && (
              <a className={styles.link}>
                <i className="fi fi-rr-envelope"></i>
                {information[sections.basicInfo]?.detail?.email}
              </a>
            )}
            {information[sections.basicInfo]?.detail?.phone && (
              <a className={styles.link}>
                <i className="fi fi-rr-phone"></i>
                {information[sections.basicInfo]?.detail?.phone}
              </a>
            )}
            {information[sections.basicInfo]?.detail?.linkedin && (
              <a className={styles.link}>
                <i className="fi fi-rr-globe"></i>
                {information[sections.basicInfo]?.detail?.linkedin}
              </a>
            )}
            {information[sections.basicInfo]?.detail?.github && (
              <a className={styles.link}>
                <i className="fi fi-rr-globe"></i>
                {information[sections.basicInfo]?.detail?.github}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.col1}>
          {information[sections.workExp]?.details?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.workExp]?.sectionTitle}
              </div>
              <div className={styles.content}>
                {information[sections.workExp]?.details?.map((item, index) => (
                  <div className={styles.item} key={`workexp_${index}`}>
                    {item.title && <p className={styles.title}>{item.title}</p>}
                    {item.companyName && (
                      <p className={styles.subTitle}>{item.companyName}</p>
                    )}
                    {item.startDate && item.endDate && (
                      <div className={styles.date}>
                        <p>{getFormattedDate(item.startDate)}-</p>
                        <p>{getFormattedDate(item.endDate)}</p>
                      </div>
                    )}
                    {item.points?.length > 0 && (
                      <ul className={styles.points}>
                        {item.points?.map((elem, index) => (
                          <li className={styles.point} key={`workexp_pt_${index}`}>
                            {elem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {information[sections.project]?.details?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.project]?.sectionTitle}
              </div>
              <div className={styles.content}>
                {information[sections.project]?.details?.map((item, index) => (
                  <div className={styles.item} key={`proj_${index}`}>
                    {item.title && <p className={styles.title}>{item.title}</p>}
                    {item.overview && (
                      <p className={styles.overview}>{item.overview}</p>
                    )}
                    {item.link && (
                      <a className={styles.link} href={item.link} target="_blank" rel="noreferrer">
                        <i className="fi fi-rr-globe"></i>
                        {item.link}
                      </a>
                    )}
                    {item.github && (
                      <a className={styles.link} href={item.github} target="_blank" rel="noreferrer">
                        <i className="fi fi-rr-globe"></i>
                        {item.github}
                      </a>
                    )}
                    {item.points?.length > 0 && (
                      <ul className={styles.points}>
                        {item.points?.map((elem, index) => (
                          <li className={styles.point} key={`proj_pt_${index}`}>
                            {elem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.col2}>
          {information[sections.education]?.details?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.education]?.sectionTitle}
              </div>
              <div className={styles.content}>
                {information[sections.education]?.details?.map((item, index) => (
                  <div className={styles.item} key={`edu_${index}`}>
                    {item.title && <p className={styles.title}>{item.title}</p>}
                    {item.college && (
                      <p className={styles.subTitle}>{item.college}</p>
                    )}
                    {item.startDate && item.endDate && (
                      <div className={styles.date}>
                        <p>{getFormattedDate(item.startDate)}-</p>
                        <p>{getFormattedDate(item.endDate)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {information[sections.achievement]?.points?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.achievement]?.sectionTitle}
              </div>
              <div className={styles.content}>
                <ul className={styles.points}>
                  {information[sections.achievement]?.points?.map((elem, index) => (
                    <li className={styles.point} key={`achieve_${index}`}>
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {information[sections.summary]?.detail && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.summary]?.sectionTitle}
              </div>
              <div className={styles.content}>
                <p className={styles.overview}>
                  {information[sections.summary]?.detail}
                </p>
              </div>
            </div>
          )}

          {information[sections.skills]?.points?.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                {information[sections.skills]?.sectionTitle}
              </div>
              <div className={styles.content}>
                <ul className={styles.points}>
                  {information[sections.skills]?.points?.map((elem, index) => (
                    <li className={styles.point} key={`skill_${index}`}>
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Resume;
