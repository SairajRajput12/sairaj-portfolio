import ProjectSelector from './components/projectSelector';
import './Project.css'; 
import img from './images/Action Recognition/download.png'; 
import img1 from './images/Fertilizer Recommendation System/image1.jpg';
import img2 from './images/DataSales Analysis/image1.png'; 
import img3 from './images/Crop Recommendation System/image1.png'; 
import img4 from './images/Docker Based Full Stack Application/image1.png'; 
import img5 from './images/Project Management/image1.png'; 
import img6 from './images/Real Time Quiz Application/image1.png'; 
import img7 from './images/restaurant app/img1.png'; 
import img8 from './images/searchFlix/image4.png'; 
import img9 from './images/smart survillience system/image1.jpg'; 
import img10 from './images/X_API/image1.jpeg'; 
import img11 from './images/plant disease prediction/image.jpeg'; 
import ProjectCard from '../../components/ProjectCard';
import { useState } from 'react';

const projects = [
    {
        value:'Action Recognition', 
        img:img, 
        link:'https://github.com/SairajRajput12/Action-Recognition', 
        duration:'April 2024 to June 2024', 
        skills:[
            'keras',
            'python',
            'tensorflow',
            'jupyter notebook'
        ],
        category:'ml'
    },
    {
        value:'Fertilizer Recommendation System', 
        img:img1, 
        link:'https://github.com/SairajRajput12/FertilizerRecommendationAPI', 
        duration:'July 2024 to Octomber 2024', 
        skills:[
            'keras',
            'python',
            'tensorflow',
            'jupyter notebook'
        ],
        category:'ml'
    },
    {
        value:'Datasales analysis', 
        img:img2, 
        link:'https://github.com/SairajRajput12/Big-Mart-Sales-Visualisation-Enhanced', 
        duration:'Octomber 2024 to December 2024', 
        skills:[
            'React js',
            'python',
            'Flask',
            'React apex graphics'
        ],
        category:'web'
    },
    {
        value:'Real Time monitoring and crop recommendation', 
        img:img3, 
        link:'https://github.com/SairajRajput12/FertilizerRecommendationAPI', 
        duration:'July 2024 to Octomber 2024', 
        skills:[
            'Next js',
            'Mongo DB',
            'Express js',
            'tensorflow', 
            'keras', 
            'Random forest algorithm', 
            'kaggle'
        ],
        category:'ml'
    },
    {
        value:'Docker Project Management System', 
        img:img4, 
        link:'https://github.com/SairajRajput12/Docker-Learnings', 
        duration:'Januvary 2025 to Februvary 2025', 
        skills:[
            'Python',
            'Flask',
            'React js',
            'Dummy Database', 
            'Docker', 
            'Linux' 
        ],
        category:'other'
    },
    {
        value:'Project Management System', 
        img:img5, 
        link:'https://github.com/SairajRajput12/Project-Management-System-With-Role-Based-Functionality', 
        duration:'November 2024 to Februvary 2025', 
        skills:[
            'Python',
            'Flask',
            'React js',
            'Dummy Database', 
        ],
        category:'web'
    },
    {
        value:'Real Time Quiz Application', 
        img:img6, 
        link:'https://github.com/SairajRajput12/Fixit_Assignment', 
        duration:'November 2024 to Januvary 2025', 
        skills:[
            'Python',
            'Flask',
            'React js',
            'socket io',
            'Firebase', 
        ],
        category:'other'
    },
    {
        value:'Restaurant Application', 
        img:img7, 
        link:'https://github.com/SairajRajput12/Angular-MiniProject', 
        duration:'Februvary 2025 to March 2025', 
        skills:[
            'Angular',
            'Typescript',
            'ngrok',
        ],
        category:'web'
    },
    {
        value: 'Search Flix', 
        img:img8, 
        link:'https://github.com/SairajRajput12/SearchFlix', 
        duration:'Februvary 2025 to March 2025', 
        skills:[
            'Angular',
            'Typescript',
            'ngrok',
        ],
        category:'web'
    },
    {
        value: 'Smart Survilliance System', 
        img:img9, 
        link:'https://github.com/SairajRajput12/Machine-learning-project', 
        duration:'Februvary 2024 to May 2024', 
        skills:[
            'Angular',
            'Typescript',
            'ngrok',
        ],
        category:'ml'
    },
    {
        value: 'X API For Fetching Trends using Selenium', 
        img:img10, 
        link:'https://github.com/SairajRajput12/Selenium-Tutorial', 
        duration:'November 2024 to Februvary 2025', 
        skills:[
            'Angular',
            'Typescript',
            'ngrok',
        ],
        category:'other'
    },
    {
        value: 'Plant Disease Prediction', 
        img:img11, 
        link:'https://github.com/SairajRajput12/Plant_disease_prediction', 
        duration:'July 2024 to Octomber 2024', 
        skills:[
            'Tensorflow',
            'Python',
            'Keras',
        ],
        category:'ml'
    }
]

export default function Project(){
    const fi_project = projects.filter((value) => value.category === 'web'); 


    const [visibleProjects,setVisibleProject] = useState(fi_project); 
    console.log(visibleProjects); 
    const handleSelector = (e,value1) => {
        e.preventDefault(); 
        if(value1 === 'all'){
            setVisibleProject(projects); 
        }
        else{
            setVisibleProject(() => {
                const givenProjects = projects; 
                const anotherP = givenProjects.filter((value) => value.category === value1); 
                return anotherP; 
            })
        }
    }

    return(
        <section className='project'>
            <h1>Projects</h1>
            <ProjectSelector handleSelector={handleSelector} />
            <div className='project-section'>
                {
                    visibleProjects.map((value,index) => (
                        <ProjectCard key={index} skills={value.skills} value={value.value} link={value.link} duration={value.duration} img={value.img} />
                    ))
                }
            </div>
        </section>
    )
}