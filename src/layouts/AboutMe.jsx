import Footer from "@components/Footer";
import Nav from "@components/Nav"
import Image from "next/image";

const AboutMe = () => {

    let name = "sobre mí";
    let page = "2"
    const images = ["https://i.giphy.com/media/pOD3I7mkSZs21xtcrC/giphy.webp", "https://media2.giphy.com/media/bUNXK14oneRypVspCn/giphy.gif", "https://media3.giphy.com/media/ug7muCA4yj6GkBn9Nk/giphy.gif", "https://media3.giphy.com/media/NRpkjTxbYHyDBcPwJ4/giphy.gif"]
    return (

        <div className="container">
            <Nav />
            <div className="d-flex flex-column justify-content-between align-items-center flex-wrap col-12">
                <div className="text col-lg-12">
                    <h1 className="title">Juan Carlos Vilcherrez</h1>
                    <div className="mt-4 mr-md-0">
                        <p >Ademas de desarrollador web soy estudiante de Arquitectura
                            en la Universidad de Buenos Aires.</p>
                        <p>
                            Siempre en constante aprendizaje en las ultimas tendencias
                            en tecnologia para mejorar mis habilidades en programación.
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
                        width={200}
                        height={200}
                        alt="Picture of the author"
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
