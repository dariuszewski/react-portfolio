import "./about.css";

import meImage from "../../assets/me.png";
import aboutImage from "../../assets/about.png";

export default function About() {
  return (
    <div id="About">
      <h3 className="section_title">A few words about me...</h3>
      <div className="About_content">
        <img src={meImage} alt="First Image" className="About_left-image" />
        <p>
          Hello! I'm a recent computer science graduate with specialization in
          intelligent systems from the University of Economics in Poland. My
          master's thesis was on the use of generative artificial intelligence
          in a business environment. Two years earlier I've finished my
          bachelor's degree with specialization in software engineering. My
          academic journey has equipped me with a strong foundation in software
          engineering and a deep understanding of intelligent systems. In
          addition to my university diploma, I have achieved an overall score of
          band 8 on the IELTS test. I still want to develop myself and explore
          more of the amazing world of the digital world.
        </p>
        <blockquote className="quote">
          A true master is an eternal student.
        </blockquote>
        <img
          src={aboutImage}
          alt="Second Image"
          className="About_right-image"
        />
        <p>
          I have been professionally active as an engineer since 2021, putting
          great effort into delivering the highest quality work right from the
          start. For the first 18 months, I worked as a data engineer, focusing
          on Apache Airflow, BigQuery, and Azure Functions. Subsequently, I have
          been continuously engaged as a backend developer, specializing in
          Flask and Django. I'm easy to work with and enjoy collaborating with a
          diverse range of talents.
        </p>
        <p>
          Always on the lookout for new challenges, learning something new
          everyday. Feel free to contact me! Let's build something great
          together!
        </p>
      </div>
    </div>
  );
}
