import Footer from "@components/Footer";
import Nav from "@components/Nav"

const AboutMe = () => {

    let name = "sobre mí";
    let page = "2"
    return (

        <div className="container">
            <Nav />
            <div className="d-flex justify-content-between align-items-center flex-wrap col-12">
                <div className=" text col-md-12 col-lg-8">
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
                <div className="photo col-lg-4 col-12">
                </div>

            </div>
            <div>

            </div>
            <Footer sectionName={name}
                sectionPage={page} />
        </div>
    )
}

export default AboutMe
