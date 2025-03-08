import { useState } from "react";
import './p.css'; 

const ProjectSelector = () => {
  const categories = ["All", "Web Development", "Machine Learning", "IoT"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { id: 1, title: "MERN Stack App", category: "Web Development" },
    { id: 2, title: "AI Prediction Model", category: "Machine Learning" },
    { id: 3, title: "IoT Smart Farm", category: "IoT" },
    { id: 4, title: "Portfolio Website", category: "Web Development" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="project">
      <h1>My Projects</h1>
      <div className="categoryselector">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-section">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSelector;
