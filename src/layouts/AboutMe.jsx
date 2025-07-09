import Image from "next/legacy/image";

const AboutMe = () => {

    const url = "/avatartion.png"
    const resume = "Ideas en soluciones funcionales. \nActualmente, formo parte de    la Secretaría de Innovación y Transformación Digital del GCBA trabajando en un producto que unifica y optimiza el acceso a datos, facilitando la consulta y el análisis de datos gubernamentales. A la par, sigo mi camino en la arquitectura ⛑️ en FADU, combinando lógica y creatividad en cada proyecto. \nDisfruto investigando nuevas tecnologías, explorando soluciones innovadoras y, en mis ratos libres, disfrutando del 🎬 cine y el arte."

    return (
        <div className="container-abt d-flex flex-column justify-content-between align-items-center col-12 p-lateral pt-5 " >
            <div id="aboutme" className=" d-flex justify-content-between flex-lg-row flex-column ">
                <div
                    className="col-8 col-sm-6"
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        aspectRatio: '1 / 1',
                        borderRadius: '50%',
                        height: '15rem',
                        width: '15rem'
                    }}
                ></div>
                <div className="col-12 col-sm-6 col-md-8 p-2 col-lg-8 p-0">
                    <p className="description" >
                        {resume}
                    </p>
                </div>
            </div>
            <div className="triangle-container"
                style={{
                    margin: '0 important!',
                    width: '100vw',
                    height: '10rem',
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                    backgroundColor: '#111111',
                    overflow: 'hidden', // Esto es importante para que lo interno no se escape
                }}>
                <div className="bg"></div>
            </div>
            <style jsx>{`
                
                .container-abt{
                    background-color:var(--white);
                    height:auto;
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