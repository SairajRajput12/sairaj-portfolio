import './AboutMe.css'; 
import SocialMediaIcons from './SocialMediaIcons';

export default function About(){
  return (
    <>
      <section className='about'>
      <div className='about-me'>
       <h1>About Me</h1>
        <img className='profile-image' src='sairaj.jpeg' alt='makima image'  />
          <div className='description'>
          <p className='desc'>I am Sairaj, a B.Tech student with a strong passion for software development. My expertise spans web technologies and programming languages, including Flask, Python, React.js, MySQL, C++, Java, and C. </p>
          <p className='desc'>I am constantly exploring new technologies and pushing my limits to enhance my skills.I am a passionate and dedicated web developer, committed to leveraging my skills and knowledge to create impactful digital solutions. I am continuously evolving in the ever-changing tech landscape.</p>
          <p className='desc'>Currently, I am seeking opportunities to gain hands-on industry experience as a Software developer intern at Brandspark Technologies. I thrive in challenging environments that encourage learning and innovation. My goal is to contribute effectively to a dynamic team while expanding my technical knowledge and problem-solving abilities.</p>
        </div>
        <SocialMediaIcons />
        </div>
      </section>
    </>
  );
}