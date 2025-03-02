import './ExperienceCard.css'; 

export default function ExperienceCard(){
    return(
         <div className='block'>
                <div className='left'></div>
                <div className='right'>
                    <div className='margin-block'>
                        <div className='f'>2025 Januvary</div>
                        <div className='s'></div>
                    </div>
                    <div className='content-block'>
                        <div>
                            <h1>Brandspark Technologies</h1>
                            <p>
                                <span>Software Developer Intern Position</span>
                                <span>Januvary 2025 - Now</span>
                            </p>
                            <div className='key-responsibilities'>
                                <h3>Key Responsibilities</h3>
                                <li>
                                    Interned as a Software developer, working on UI/UX improvements and feature development.
                                </li>
                                <li>
                                    Contributed to the company main project, collaborating with cross-functional teams.
                                </li>
                                <li>
                                    Worked with Angular, Git, Networking, Spring Boot, Docker, and TypeScript.
                                </li>
                                <li>
                                    Gained hands-on experience with backend development responsibilities.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}