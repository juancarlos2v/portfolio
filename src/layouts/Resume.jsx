import experience from "@data/experience.json"

const Resume = () => {
    return (
        <div className="container-exp">
            <p className="mb-5">EXPERIENCIA |</p>
            {experience.map((exp, index) => (
                <div className="d-flex col-12 justify-content-start exp" key={exp.id}>
                    <div className="timeline-circle ">
                        <svg height="100%" width="20">
                            {index !== experience.length - 1 && (
                                <line x1="10" y1="10" x2="10" y2="100%" stroke="white" strokeWidth="2" />
                            )}
                            <circle cx="10" cy="10" r="8" fill="white" />
                        </svg>
                    </div>
                    <div className="description-exp">
                        <p>{exp.rol} | {exp.workplace} </p>
                        <p>{exp.from} - {exp.until} </p>
                        <p>{exp.description}</p>
                    </div>

                </div>
            ))}

            <style jsx>{`
                .container-exp{
                    padding: var(--padding-desktop);
                    
                    padding-top:8rem;
                }
                .container-exp p{
                    color:var(--white)
                }
                .exp{
                    height:13rem;
                }
                .description-exp{
                    margin-left:3rem;
                }
                `}</style>
        </div>
    )
}

export default Resume
