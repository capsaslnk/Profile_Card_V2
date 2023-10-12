import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsLi = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <body>
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </body>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="avatar2.jpg" alt="Jonas" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillsLi.map((skil) => (
        <Skill skillObj={skil} key={skil.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "✋"}
        {skillObj.level === "advanced" && "👌"}
      </span>
    </div>
  );

  // if (skillObj.level === "beginner")
  //   return (
  //     <div className="skill" style={{ backgroundColor: skillObj.color }}>
  //       {skillObj.skill}👶
  //     </div>
  //   );
  // if (skillObj.level === "intermediate")
  //   return (
  //     <div className="skill" style={{ backgroundColor: skillObj.color }}>
  //       {skillObj.skill}✋
  //     </div>
  //   );
  // if (skillObj.level === "advanced")
  //   return (
  //     <div className="skill" style={{ backgroundColor: skillObj.color }}>
  //       {skillObj.skill}👌
  //     </div>

  // return (
  //   <div className="skill" style={{ backgroundColor: skillObj.color }}>
  //     {skillObj.skill}
  //     {skillObj.emoji}
  //   </div>
  // );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
