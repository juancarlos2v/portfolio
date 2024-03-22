import { useState } from "react";
import projects from "@data/projects.json";
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
    const [project, setProject] = useState(0);
    const changeContent = () => {

        project === repositories.length - 1 ?
            setProject(0) :
            setProject((prev) => prev + 1)

        console.log(project)
    };

    return (
        <div className="container-projects col-12">
            <p>PROYECTOS |</p>
            <div className="body">
                <div>
                    <button type="button">TODOS </button>
                    <button type="button">| APP </button>
                    <button type="button">| LANDING </button>
                    <button type="button">| NPM </button>
                </div>
                <div className="row ">
                    {projects.map((project, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 flex-wrap" key={index}>
                            <ProjectCard
                                id={project.id}
                                name={project.name}
                                description={project.code}
                                code={project.code}
                                deploy={project.deploy}
                                image={project.image}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <style jsx>{`
            .container-projects{
                padding: var(--padding-desktop);
                background-color:var(--white);
                padding-top:10rem;
            }
            .container-projects button{
                color:var(--black);
                padding:0;
            } 
            .body{
                padding:0 2rem 0 2rem;
            }
            `}</style>
        </div >
    );
}

export default Projects

