export default function SkillIcon({val}){ 
    let {id,src,name} = val; 
    return(
        <div key={id} className='skill-i'>
            <img src={src} alt={name} />
            <h4>{name}</h4>
        </div>
    )
}