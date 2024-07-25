import { Link } from 'react-scroll';



const SectionLink = ({ to, children, onClick }) => {
    return (
        <Link
            to={to}
            smooth={true}
            duration={500}
            offset={0} // Ajusta esto según la altura de tu barra de navegación
            onClick={onClick}
        >
            {children}

        </Link>
    );
};

export default SectionLink;
