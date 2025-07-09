import SectionLink from "@components/SectionLink"
import { useEffect, useState } from "react";
import NavMob from "./NavMob";
import IconLinkedin from "@icons/IconLinkedin";
import Link from "next/link";
import IconGithub from "@icons/IconGithub";
import ButtonMenu from "./ButtonMenu";

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

    return <>
        {/* <nav className={`blur d-flex col-12 justify-content-center ${scrolling ? 'scrolling' : ''}`}> */}
        <nav
            className="p-lateral mt-5 col-12 d-none d-lg-flex justify-content-between"
            style={{ color: 'var(--white-two' }}
        >
            <div className="d-flex justify-content-start gap-5">
                <SectionLink to="aboutme"><p> Sobre mí</p></SectionLink>
                <SectionLink to="skills">Blog</SectionLink>
            </div>
            <div className="d-flex gap-4 justify-content-end align-items-center ">
                <Link href={'https://www.github.com/juancarlos2v'} target="_blank" style={{ color: 'var(--white)' }}><IconGithub /> </Link>
                <Link href={'https://www.linkedin.com/in/juancarlos-vilcherrez'} target="_blank" style={{ color: 'var(--white)' }}><IconLinkedin /></Link>
                <SectionLink
                    to="contact"
                ><span
                    className="p-1 d-flex justify-content-center"
                    style={{ backgroundColor: 'var(--white)', borderRadius: '8px', width: '8rem', color: 'var(--black)' }}>
                        Contactame
                    </span>
                </SectionLink>
            </div>
        </nav>


        <div className='d-md-none d-lg-none d-flex justify-content-between align-items-center mt-4 col-12 p-lateral' >
            <ButtonMenu />
            <SectionLink
                to="contact"
            ><span
                className="p-1 d-flex justify-content-center"
                style={{ backgroundColor: 'var(--white)', borderRadius: '8px', width: '8rem', color: 'var(--black)' }}>
                    Contactame
                </span>
            </SectionLink>
        </div>

    </>
}

export default Main
