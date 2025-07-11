import { useState } from "react";
import projects from "@data/projects.json";
import ProjectCard from "@components/ProjectCard";
import { Col, Row } from "react-bootstrap";

const Projects = () => {
    return (
        <div id="projects" className="container-section  col-12 h-auto">
            <h2 style={{ color: 'white' }}>Algunos de mis proyectos:</h2>
            <div className="body">

                <Row lg={3} md={2} sm={1} xs={1} >
                    {projects.map((project, index) => (
                        <Col key={index} xs={12}>
                            <ProjectCard
                                id={project.id}
                                name={project.name}
                                description={project.code}
                                code={project.code}
                                deploy={project.deploy}
                                image={project.image}
                            />
                        </Col>
                    ))}
                </Row>
            </div>

            <style jsx>{`
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

