import "./home.css";
import Typewriter from "typewriter-effect";

import homeVideo from "../../assets/video.mp4";
import homeImage from "../../assets/home_image.png";

export default function Home() {
  return (
    <div id="Home">
      <div className="Home_container">
        <div className="Home_text left">
          <div className="Home_text_top">
            <div>Hi, I'm Dariu Szewski </div>
          </div>
          <div>I'm a</div>
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Data Engineer",
                "Backend Developer",
                "Data Analyst",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="right">
          <video className="home_video" autoPlay loop muted>
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={homeImage} alt="Fallback Display" className="home_img" />
        </div>
      </div>
    </div>
  );
}
