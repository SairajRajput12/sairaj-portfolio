export default function ProjectCard({img,skills,value,duration,link}){

    function handleNavigation(){
        window.open(link,'_blank')
    }

    return(
               <div className='project-card'>
                    <img src={img} alt='image' />
                    <div className='skills'>
                        {
                            skills.map((value,index) => (
                                <div key={index} className='skill-icon'>{value}</div>
                            ))
                        }
                    </div>
                    <div className='project-title'>
                        {value}
                    </div>
                    <span>{duration}</span>
                    <button onClick={handleNavigation} className='project-button'>Github Link</button>
               </div>
    )
}