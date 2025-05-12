import React from "react";

type ProjectTileProps = {
    href: string;
    imageSrc: string;
    title: string;
};

const ProjectTile: React.FC<ProjectTileProps> = ({ href, imageSrc, title }) => {
    return (
        <a href={href} target="_blank" className={"project"}>
            <div className="project-image-wrapper">
                <img
                    className="project-image"
                    src={imageSrc}
                    alt={`project image: ${title}`}
                />
            </div>
            <h3 className="project-title">{title}</h3>
        </a>
    );
};

export default ProjectTile;
