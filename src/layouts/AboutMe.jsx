import Image from "next/legacy/image";

const AboutMe = () => {

    const url = "/1.jpg"

    return (
        <div id="aboutme" className="container-section col-12 h-xl-100 h-100 h-lg-100 d-flex flex-column align-items-start ">
            <p >SOBRE MI |</p>
            <div className="col-12 d-flex flex-lg-row flex-column align-items-center mt-5">
                <div className="col-8 photo mb-lg-0 mb-5 col-sm-6">
                    <Image
                        src={url}
                        layout="responsive"
                        alt="Juan Carlos"
                        height={300}
                        width={200}
                    />
                </div>
                {/* <div className="photo col-4"></div> */}
                <div className="col-12 col-sm-6 col-md-8 p-2 col-lg-8 p-0">
                    {/* <p className="title">Sobre <span className="text-black-light">mí</span></p> */}
                    <p className="description" >Hola, soy Juan Carlos, desarrollador apasionado por la tecnología y el diseño. A lo largo de mi carrera, he tenido el privilegio de formar parte de equipos multidisciplinarios que valoran tanto la creatividad como la funcionalidad.
                        Mi enfoque se basa en combinar tecnología y diseño para crear proyectos funcionales como visualmente atractivos. En cada equipo en el que he trabajado, hemos fomentado una cultura de colaboración y creatividad, asegurando asi resultados de calidad.
                        <br /> <span className="d-none d-md-flex ">
                            Soy una persona curiosa y aplicada, siempre buscando superar desafíos y encontrar soluciones innovadoras. Creo firmemente en la importancia de integrar estética y funcionalidad, y me esfuerzo por garantizar que cada proyecto no solo cumpla con su propósito, sino que también ofrezca una experiencia visualmente agradable. </span>
                    </p>
                </div>
            </div>
            {/* <p className="d-sm-flex d-md-none" >
                <span >Soy una persona curiosa y aplicada, siempre buscando superar desafíos y encontrar soluciones innovadoras. Creo firmemente en la importancia de integrar estética y funcionalidad, y me esfuerzo por garantizar que cada proyecto no solo cumpla con su propósito, sino que también ofrezca una experiencia visualmente agradable.</span> </p> */}
            <style jsx>{`
                .photo{
                 //background-color:var(--black-light);
                 height:20rem;
                 width:15rem;
                 margin-right: 2rem
                }
                .container-section{
                    background-color:var(--white);
                }
                .title {
                    font-size: 16px;
                    font-weight:bold;
                    color: var(--black);
                    margin-bottom:2rem !important;
                }
                .description{
                    font-size:15px;
                }
                /* @media (max-width: 992px) {
                    .title {
                        margin-top: 2rem;
                    }
                    .title, .description{
                        text-align:center;
                    }
                } */
            `}</style>
        </div>
    )
}

export default AboutMe
