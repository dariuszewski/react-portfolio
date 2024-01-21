import './about.css'
import AboutText from "./AboutText"
import AboutImg from './AboutImg'

export default function About() {
    return (
        <section className='section-container' id="About">
            <AboutImg />
            <AboutText />
        </section>
    )
}