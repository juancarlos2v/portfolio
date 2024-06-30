import SectionLink from "@components/SectionLink"
import { useEffect, useState } from "react";

const Main = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`blur d-flex col-12 justify-content-center ${scrolling ? 'scrolling' : ''}`}>
            <div className=" main col-8 d-flex justify-content-between" >
                <SectionLink to="start"> INICIO</SectionLink>
                <SectionLink to="aboutme">SOBRE MI</SectionLink>
                <SectionLink to="skills">TECNOLOGIAS</SectionLink>
                <SectionLink to="proyects">PROYECTOS</SectionLink>
                <SectionLink to="contact">CONTACTO</SectionLink>
            </div>

            <style jsx>{`
                .blur {
                    position:fixed;
                    z-index:99;
                    transition: background-color 0.3s ease;
                    background-color: ${scrolling ? 'rgba(10, 10, 10, 0.623)' : 'transparent'};
                    backdrop-filter: blur(${scrolling ? '10px' : '0'});
                    
                }
                 .main{
                    color:var(--white);
                    mix-blend-mode: difference; // Cambia el color basado en el fondo
                    font-family: "Raleway", sans-serif;
                    border-bottom:solid .1rem var(--black-light);
                    padding: 1rem 0 1rem 0;
                    margin: 0 30rem;
                }
                `}</style>
        </nav>


    )
}

export default Main
