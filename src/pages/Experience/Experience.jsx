import './Experience.css'; 
import ExperienceLeftCard from './ExperienceLeftCard';
// import ExperienceLeftCard from './ExperienceLeftCard';
import ExperienceRightCard from './ExperienceRightCard';

let experienceSection = [
    {
        name:'Brandspark Technologies',
        position:'Software Developer Intern Position', 
        duration:'Januvary 2025 - Now', 
        keyResponsibilities:[
            "Interned as a Software developer, working on UI/UX improvements and feature development.",
            "Contributed to the company main project, collaborating with cross-functional teams.", 
            "Worked with Angular, Git, Networking, Spring Boot, Docker, and TypeScript.", 
            "Gained hands-on experience with backend development responsibilities."
        ],
        time:'2025 Januvary',
        skills:[
            'Angular','Typescript','Docker','Github','Git','Linux'
        ]
    },
     {
        name:'Brandspark Technologies',
        position:'Software Developer Intern Position', 
        duration:'Januvary 2025 - Now', 
        keyResponsibilities:[
            "Interned as a Software developer, working on UI/UX improvements and feature development.",
            "Contributed to the company main project, collaborating with cross-functional teams.", 
            "Worked with Angular, Git, Networking, Spring Boot, Docker, and TypeScript.", 
            "Gained hands-on experience with backend development responsibilities."
        ],
        time:'2025 Januvary',
        skills:[
            'Angular','Typescript','Docker','Github','Git','Linux'
        ]
    }
]


export default function Experience(){
    let prev = 'left'; 

    return(
        <section className='experience'>
            <h1>Experience</h1>
            {
                experienceSection.map((value,index) => {
                    if(prev === 'left'){
                        prev = 'right'; 
                        return (<ExperienceRightCard key={index} val={value} />);
                    }
                    else{
                        prev = 'left'; 
                        return (<ExperienceLeftCard key={index} val={value}  />); 
                    }
                })
            }
        </section>
    )
}