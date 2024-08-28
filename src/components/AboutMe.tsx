import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";

function AboutMe() {
  const Title = styled(motion.h1)`
    font-size: 270px;
    font-family: "Montserrat-Bold";
    color: rgb(238, 238, 238);
    position: absolute;
    margin-left: auto;
    margin-right: 10px;
    transition: transform 0.8s ease-out;
    @media (max-width: 1400px) {
      font-size: 200px;
    }
    @media (max-width: 1100px) {
      font-size: 150px;
    }
    @media (max-width: 800px) {
      font-size: 100px;
    }
    @media (max-width: 550px) {
      font-size: 60px;
      margin-left: 600px;
      margin-right: auto;
      text-align: center;
    }

    @media (max-width: 320px) {
      display: none;
    }
  `;

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-800, 12000]);
  return (
    <div className="aboutMeContainer">
      <Title style={{ x }}> About Me</Title>
      <p className="aboutMe-p1">
        Being able to bring ideas to life is what i live for
      </p>
      <p className="aboutMe-p2">Here are some of my projects ⬇️</p>
    </div>
  );
}
export default AboutMe;
