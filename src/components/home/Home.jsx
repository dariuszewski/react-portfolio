import "./home.css";
import Typewriter from "typewriter-effect";

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
          <img className="home_img" src="src/assets/home4.png" alt="fail" />
        </div>
      </div>
    </div>
  );
}
