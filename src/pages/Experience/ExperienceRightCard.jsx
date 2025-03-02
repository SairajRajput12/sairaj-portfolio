import { useEffect, useRef, useState } from 'react';
import './ExperienceRightCard.css';

export default function ExperienceRightCard({ val }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Reset animation when it goes out of view
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`block ${isVisible ? 'animate' : ''}`}>
            <div className='left'></div>
            <div className='right'>
                <div className='margin-block'>
                    <div className='f'>{val.time || "No time provided"}</div>
                    <div className='s'></div>
                </div>
                <div className='content-block'>
                    <div>
                        <h1>{val.name || "No name provided"}</h1>
                        <p>
                            <span>{val.position || "No position"}</span>
                            <span>{val.duration || "No duration"}</span>
                        </p>

                        <div className="skills">
                            {val.skills?.length ? (
                                val.skills.map((value, index) => (
                                    <button key={index}>{value}</button>
                                ))
                            ) : (
                                <p>No skills listed</p>
                            )}
                        </div>

                        <div className='key-responsibilities'>
                            <h3>Key Responsibilities</h3>
                            <ul>
                                {val.keyResponsibilities?.length ? (
                                    val.keyResponsibilities.map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))
                                ) : (
                                    <p>No responsibilities listed</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
