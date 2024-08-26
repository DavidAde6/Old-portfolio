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
  `;

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [1, 0], [-700, 13000]);
  return (
    <div className="SkillsContainer">
      <Title style={{ x }}>Skills</Title>
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
      <p className="skills-txt">
        Time-Management
        <br />
        Emotional Intelligence
        <br />
        Project Management
        <br />
        Active Listening
      </p>
    </div>
  );
}

export default Skills;
