import { Link } from 'react-scroll';



const SectionLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            smooth={true}
            duration={500}
            offset={0} // Ajusta esto según la altura de tu barra de navegación
        >
            {children}

        </Link>
    );
};

export default SectionLink;
