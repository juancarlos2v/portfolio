// import Image from "next/legacy/image";

const AboutMe = () => {

    return (
        <div id="aboutme" className="container-section col-12 h-md-auto h-lg-100">

            <p className="mb-5">SOBRE MI |</p>
            <div className="col-12 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center">
                {/* <Image
                    key={index}
                    src={url}
                    layout="intrinsic"
                    width={170}
                    height={300}
                    alt="Juan Carlos"
                /> */}
                <div className="photo col-4"></div>
                <div className="col-8 p-2">
                    {/* <p className="title">Sobre <span className="text-black-light">mí</span></p> */}
                    <p className="description" >A lo largo de mi trayecto, me he visto involucrado en proyectos que combinan creatividad y tecnología de manera innovadora,mi pasión por el desarrollo se complementa con una apreciación profunda por la estética y el diseño, elementos que considero esenciales en todos los proyectos en los que me embarco. <br /> Mi enfoque aplicado y curioso me impulsa a superar desafíos y buscar soluciones innovadoras en todas las áreas de mi vida profesional. Siempre busco nuevas maneras de integrar creatividad y funcionalidad, asegurando que cada proyecto sea no solo eficiente, sino también visualmente atractivo
                    </p>
                </div>
            </div>

            <style jsx>{`
                .photo{
                 background-color:var(--black-light);
                 height:20rem;
                 width:15rem
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
                @media (max-width: 992px) {
                    .title {
                        margin-top: 2rem;
                    }
                    .title, .description{
                        text-align:center;
                    }
                }
            `}</style>
        </div>
    )
}

export default AboutMe
