import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";

function Skills() {
  const Title = styled(motion.h1)`
    font-size: 270px;
    font-family: "Montserrat-Bold";
    color: rgb(238, 238, 238);
    position: absolute;
    margin-left: auto;
    margin-right: 10px;
    transition: transform 0.8s ease-out;
    @media (max-width: 1000px) {
      margin-right: auto;
      margin-left: -150px;
    }
    @media (max-width: 700px) {
      margin-right: auto;
      margin-left: -700px;
    }
    @media (max-width: 600px) {
      display: none;
    }
  `;

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [1, 0], [-500, 13000]);
  return (
    <div className="SkillsContainer">
      <Title style={{ x }}>Skills</Title>
      <h1 className="SkillsTitleRes">Skills</h1>
      <div className="SkillsRes1">
        <p className="skills-txt">
          Time-Management
          <br />
          Emotional Intelligence
          <br />
          Project Management
          <br />
          Active Listening
        </p>
        <p className="skills-txt">
          TypeScript
          <br />
          Javascript
          <br />
          Java
          <br />
          Git
        </p>
        <p className="skills-txt">
          HTML
          <br />
          CSS
          <br />
          React
          <br />
          Bootstrap
        </p>
        <p className="skills-txt">
          Python
          <br />
          Pandas
          <br />
          Numpy
          <br />
          Pytorch
        </p>
      </div>
      <div className="skillsRes2">
        <div className="skills-sec1">
          <p className="skills-txt">
            Time-Management
            <br />
            Emotional Intelligence
            <br />
            Project Management
            <br />
            Active Listening
          </p>
          <p className="skills-txt">
            TypeScript
            <br />
            Javascript
            <br />
            Java
            <br />
            Git
          </p>
        </div>
        <div className="skills-sec2">
          <p className="skills-txt">
            HTML
            <br />
            CSS
            <br />
            React
            <br />
            Bootstrap
          </p>
          <p className="skills-txt">
            Python
            <br />
            Pandas
            <br />
            Numpy
            <br />
            Pytorch
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
