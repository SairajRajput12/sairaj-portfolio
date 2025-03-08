import './Navigation.css'; 

export default function Navigation(){
    return(
        <div className='navbar-content'>
            <nav className="navcontent">
                <a href="#home">Home</a>
                <a href="#about">About Me</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                {/* <a href="#achievement">Achievements</a> */}
                <a href="#contact">Get in touch</a>
            </nav>
        </div>
    )
}
