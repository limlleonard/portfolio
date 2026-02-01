import "./Skills.css";

function Skills() {
    const skillsData = [
        { name: "Python", percent: 90 },
        { name: "SQL", percent: 75 },
        { name: "HTML, CSS, JavaScript", percent: 75 },
        { name: "React, TypeScript", percent: 60 },
        { name: "Docker", percent: 50 },
        { name: "Azure DevOps", percent: 40 },
    ];
    return (
        <div className="right1 skills">
            <ul>
                {skillsData.map((skill, index) => (
                    <li key={index}>
                        <span className="text">{skill.name}</span>
                        <span className="percent">
                            <div style={{ width: `${skill.percent}%` }}></div>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
