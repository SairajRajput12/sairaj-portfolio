import SkillIcon from './SkillIcon';
import './Skills.css'; 


let skills = [
    {
        id:1,
        src:'c++.png', 
        name:'C++'
    }, 
    {
        id:2, 
        src:'html.png', 
        name:'HTML'
    }, 
    {
        id:3,
        src:'Python.png', 
        name:'Python'
    }, 
    {
        id:4, 
        src:'css-3.png', 
        name:'CSS'
    }, 
    {
        id:5, 
        src:'java-script.png', 
        name:'Javascript'
    }, 
    {
        id:6, 
        src:'typescript.png', 
        name:'Typescript'
    }, 
    {
        id:7, 
        src:'mysql.png', 
        name:'MySQL'
    }, 
    {
        id:8, 
        src:'Flask.png', 
        name:'Python Flask'
    }, 
    {
        id:9, 
        src:'react.png', 
        name:'React js'
    }, 
    {
        id:10, 
        src:'angular.png', 
        name:'Angular'
    }, 
    {
        id:11, 
        src:'docker.png', 
        name:'Docker'
    },
    {
        id:12, 
        src:'social.png',
        name:'Git'
    },
    {
        id:13, 
        src:'figma.png', 
        name:'Figma'
    },
    {
        id:14, 
        src:'linux.png', 
        name:'Linux'
    },
    {
        id:15, 
        src:'github.png', 
        name:'Github'
    },
    {
        id:16, 
        src:'power.png', 
        name:'Power BI'
    }
]

export default function Skills(){
    return(
        <section className='skill'>
             <h1>Skills</h1>
             <div className='skill-section'>
                    {
                        skills.map((value,index) => (
                            <SkillIcon key={index} val={value}  />
                        ))
                    }
             </div>
        </section>
    )
}