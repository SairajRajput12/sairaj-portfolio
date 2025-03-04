import './AboutMe.css'; 
import SocialMediaIcons from './SocialMediaIcons';

export default function About(){
  return (
    <>
      <section className='about'>
      <div className='about-me'>
       <h1>About Me</h1>
        <img className='profile-image' src='makima.jpeg' alt='makima image'  />
          <div className='description'>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <SocialMediaIcons />
        </div>
      </section>
    </>
  );
}