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
                    <p className="title">Soy <span className="text-black-light">Juan Carlos</span> <br />
                        Desarrollador Web y estudiante de 4to año de Arquitectura.</p>
                    <p className="description" >Entusiasta desarrollador con una perspectiva creativa. Además de mis habilidades en programación, también soy estudiante de Arquitectura en la Universidad de Buenos Aires, lo cual me a permitido apreciar la importancia de la estética y el diseño en todos los aspectos de mi trabajo. Me encanta explorar el mundo del arte ademas de hacer ejercicios en mis tiempos libres, y encontrar inspiración en diversas disciplinas. Mi enfoque aplicado y curioso me impulsan a superar desafíos en todas las áreas en las que me involucro.
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
                 @media (max-width: 992px) {
                    
                 }
                }
                
            `}</style>
        </div>
    )
}

export default AboutMe
