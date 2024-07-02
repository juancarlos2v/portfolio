import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Skills = () => {
    return (
        <div id="skills" className="container-section  col-12 text-light d-flex flex-column justify-content-center align-items-start ">

            <p className='mb-4'>HABILIDADES |</p>
            <Row lg={2} className='pt-2 w-100'>
                <Col lg={6} md={6} sm={12}>

                    <p>- Diseño web adaptable</p>
                    <p>- Javascript: React, Vue, Next</p>
                    <p>- Java + Spring</p>
                    <p>- Base de datos: MySQL</p>
                </Col>
                <Col lg={6} md={6} sm={12} >
                    <p>- HTML + CSS + Bootstrap</p>
                    <p>- Diseño de Interfaz: Figma </p>
                    <p>- Version de control: GIT</p>

                </Col>
            </Row>
        </div>
    )
}

export default Skills
