import Footer from "@components/Footer";
import Nav from "@components/Nav"
import Image from "next/legacy/image";

const AboutMe = () => {

    let name = "sobre mí";
    let page = "2"
    const image = [
        { arq: "https://media2.giphy.com/media/pGq84mX6hh9R5mhr32/giphy.gif" },
        { bike: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJ2ZWtoaTZ5bDFtYzJ5Z3h1eXVpajR1Zm4wYXp5am1sZ3hieThtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F2GSLOcsgdLLQ2hOAF/giphy.gif" },
        { lectura: "https://media3.giphy.com/media/q2ayW0cM0zE1Tz9cid/giphy.gif" },
        { art: "https://media3.giphy.com/media/NRpkjTxbYHyDBcPwJ4/giphy.gif" },
        { setup: "/setup.jpg" },
        { telclado: "https://media0.giphy.com/media/bUNXK14oneRypVspCn/giphy.gif" }
    ]
    const images = [image[0].arq, image[1].bike, image[2].lectura, image[5].telclado, image[4].setup, image[3].art]
    return (

        <div className="container">
            <Nav />
            <div className="d-flex flex-column justify-content-between align-items-center flex-wrap col-12">
                <div className="text col-lg-12">
                    <h1 className="title">Juan Carlos Vilcherrez</h1>
                    <div className="mt-4 mr-md-0 mrd-xs-0">
                        <p >Entusiasta desarrollador con una perspectiva creativa. Además de mis habilidades en programación, también soy estudiante de Arquitectura en la Universidad de Buenos Aires, lo cual me a permitido apreciar la importancia de la estética y el diseño en todos los aspectos de mi trabajo. Me encanta explorar el mundo del arte ademas de hacer ejercicios en mis tiempos libres, y encontrar inspiración en diversas disciplinas. Mi enfoque aplicado y curioso me impulsan a superar desafíos en todas las áreas en las que me involucro.
                        </p>
                    </div>
                </div >
            </div>

            <div className="d-flex flex-row justify-content-between align-items-center container-img">
                {images.map((url, index) => (
                    <Image
                        key={index}
                        src={url}
                        layout="intrinsic"
                        width={170}
                        height={300}
                        alt="Juan Carlos"
                    />
                ))}

            </div>

            <Footer sectionName={name}
                sectionPage={page} />

            <style jsx>{`
                .container-img{
                 overflow-x:hidden;
                 overflow-y:hidden;
                 
                }
                
            `}</style>
        </div>
    )
}

export default AboutMe
