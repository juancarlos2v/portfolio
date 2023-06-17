import { useState } from "react";
import { repositories } from "src/data/repositories";

const Projects = () => {
    const [project, setProject] = useState(0);
    const changeContent = () => {

        project === repositories.length - 1 ?
            setProject(0) :
            setProject((prev) => prev + 1)

        console.log(project)
    };

    return (
        <div className="container">

            <div className="row flex-wrap p-lg-0 p-4">
                < div className="col-lg-6 col-md-12 d-flex flex-column  justify-content-center aling-items-center" >
                    <h2>{repositories[project].name}</h2>
                    <p > {repositories[project].description} </p>
                    <div className="mt-4  col-12 d-flex justify-content-start">
                        <a className="col-lg-4 col-md-12" href={repositories[project].code} target="_blank">Codigo</a>
                        <a className="col-lg-8 col-md-12" href={repositories[project].deploy} target="_blank">Despliegue</a>
                    </div>
                </div >
                <button className="col-lg-1 col-12 d-flex justify-content-center align-items-center" onClick={changeContent}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </button>
                <div className="project-image col-lg-4 col-md-12"></div>
            </div >
            <style jsx>{`
            .container-projects{
                scroll-behavior: smooth;
                scroll-snap-align: start;
            }
            .project-image{
                background-image:url(${repositories[project].image});
                background-size:cover;
                height:100vh;
             
            }
            p,h2{
                color:var(--white)
            }
          
            `}</style>
        </div >
    );
}

export default Projects

