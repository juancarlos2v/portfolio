const ProjectCard = ({ id, name, description, code, deploy, image }) => {
    return (
        <div className="container-project d-flex flex-column align-items-end " key={id}>
            <div className="image-project">
                <span className="badge">0{id}</span>
            </div>
            <div className="d-flex flex-column align-items-end">
                <p>{name} </p>
                <a href={code} target="_blank">CÓDIGO</a>
                <a href={deploy} target="_blank">DEPLOY</a>
            </div>
            <style jsx>{`
                .image-project{ 
                    position: relative;
                    height:310px;
                    width:250px;
                    background-color:var(--white-two);
                    z-index:0
                }
                .container-project{
                    margin-top:4rem
                }
                .container-project a{
                    color:var(--black);
                }
                .badge {
                    position: absolute;
                    top: -40px;
                    right: 10px;
                    color: var(--black-light);
                    font-size: 4rem;
                    padding: 0.5rem;
                    font-family: "IBM Plex Mono", monospace;
                }
        `}</style>
        </div>

    )
}

export default ProjectCard
