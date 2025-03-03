

export default function TimeLineElement({value,isVisible}){

    

    return(
        <div className={`timeline-item ${isVisible ? 'fade-in' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{value.position}</h3>
              <h4>{value.name}</h4>
              <p>{value.duration}</p>
              <ul>
                {value.keyResponsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <p><strong>Skills:</strong> {value.skills.join(", ")}</p>
            </div>
        </div>
    )
}