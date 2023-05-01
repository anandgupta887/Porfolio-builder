import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "./Editor/Editor";
import Resume from "./Resume/Resume";
import styles from "./Body.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Body() {
  const colors = [
    "#B57EDC",
    "#239ce2",
    "#48bb78",
    "#0bc5ea",
    "#a0aec0",
    "#ed8936",
  ];
  const sections = {
    basicInfo: "Personal details",
    workExp: "Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const userDetails = useSelector((state) => state.user);

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

 

  const handleSetResumeInformation = () => {
    setResumeInformation({
      ...resumeInformation,
      [sections.basicInfo]: {
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail: {
          ...userDetails?.profile,
        },
      },
      [sections.workExp]: {
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details: userDetails?.experience,
      },
      [sections.project]: {
        id: sections.project,
        sectionTitle: sections.project,
        details: userDetails?.projects,
      },
      [sections.education]: {
        id: sections.education,
        sectionTitle: sections.education,
        details: userDetails?.education,
      },
    });
  };


  useEffect(() => {
    handleSetResumeInformation();
  }, []);

  return (
    <div className={styles.container}>
      {/* <p className={styles.heading}>Resume Builder</p> */}
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item, idx) => (
            <span
              key={idx}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        {/* <Editor
          // activeColor={activeColor}
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        /> */}
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
