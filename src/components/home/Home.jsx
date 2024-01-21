import './home.css'
import Typewriter from 'typewriter-effect';


export default function Header() {
    return (
        <div className='home'>
            <div className="home_top">
                <div>Hi, I'm</div>
                <div>Dariu Szewski</div>                
            </div>
            <div className="home_bottom">
                <div className="static_text left">
                    <div>I'm a</div>         
                    <Typewriter
                    className='dynamic_text'
                    options={{
                        strings: [
                            'Software Engineer',
                            'Data Engineer',
                            'Backend Developer', 
                            'Data Analyst',
                            'Web Developer',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                    />  
                </div>
                <div className="right">
                    <img className="home_img" src="src/assets/home.png" alt="fail" />
                </div>   
            </div>        
        </div>
    )
}