import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SectionLink from './SectionLink'; // Asegúrate de tener la importación correcta de SectionLink

const NavMob = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleSelect = () => setExpanded(false);
    console.log(expanded)

    return <>
        <Navbar expand="lg" variant='dark' className="bg-body-tertiary" expanded={expanded} onToggle={handleToggle}>
            <Container>
                <Navbar.Brand href="/#">{`</>`} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto text-light " >
                        <SectionLink to="aboutme" onClick={handleSelect}>SOBRE MI</SectionLink>
                        <SectionLink to="skills" onClick={handleSelect}>HABILIDADES</SectionLink>
                        <SectionLink to="proyects" onClick={handleSelect}>PROYECTOS</SectionLink>
                        <SectionLink to="contact" onClick={handleSelect}>CONTACTO</SectionLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
};

export default NavMob;
