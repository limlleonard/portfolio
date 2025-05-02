import "./Projects.css";
import { projectData } from "../assets/projectData";
import ProjectTile from "./ProjectTile";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-section-header">{t("h2Project")}</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectTile
                        key={index}
                        href={project.href}
                        imageSrc={project.imageSrc}
                        title={t(project.title)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
