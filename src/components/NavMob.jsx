import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SectionLink from './SectionLink'; // Asegúrate de tener la importación correcta de SectionLink
import ButtonMenu from './ButtonMenu';

const NavMob = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleSelect = () => setExpanded(false);

    return <>
        <div className='col-1 '>
            <ButtonMenu />
        </div>
    </>
};

export default NavMob;
