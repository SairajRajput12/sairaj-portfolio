import { useEffect, useRef, useState } from 'react';

import "./Timeline.css";

const experienceSection = [
  {
    name: "Brandspark Technologies",
    position: "Software Developer Intern",
    duration: "January 2025 - Now",
    keyResponsibilities: [
      "Interned as a Software developer, working on UI/UX improvements and feature development.",
      "Contributed to the company main project, collaborating with cross-functional teams.",
      "Worked with Angular, Git, Networking, Spring Boot, Docker, and TypeScript.",
      "Gained hands-on experience with backend development responsibilities."
    ],
    time: "January 2025",
    skills: ["Angular", "TypeScript", "Docker", "GitHub", "Git", "Linux"]
  }, 
  {
    name: "Upskill Campus",
    position: "Python Developer Intern",
    duration: "April 2023 - June 2023",
    keyResponsibilities: [
      "Interned as a Python developer, worked on project called safe secure password manager.",
      "Gather experience on building real world project.",
      "Worked with flask,react,python and mysql.",
      "Gained hands-on experience with backend development responsibilities."
    ],
    time: "January April 2023",
    skills: ["Flask", "Python", "React js", "Javascript", "CSS", "MySQL"]
  }
];

const ExperienceTimeline = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
           (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Reset animation when it goes out of view
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
  },[])



  return (
    <div ref={ref} className="timeline-container">
      <h2 className="timeline-title">Experience</h2>
      <div className={`timeline ${isVisible ? 'animate' : ''}`}>
        {experienceSection.map((exp, index) => (
          <div key={index} className={`timeline-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>{exp.name}</h4>
              <p>{exp.duration}</p>
              <ul>
                {exp.keyResponsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <p><strong>Skills:</strong> {exp.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
