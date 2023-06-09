import Footer from "@components/Footer";
import Nav from "@components/Nav"

const Skills = () => {
    let name = "habilidades";
    let page = "3"
    return (
        <div className="container">
            <Nav />
            <div className="w-100">
                <h1 className="title">Mis Habilidades</h1>
                <div className="skills d-flex text-white mt-4 flex-wrap">
                    <div >
                        <p>- HTML + CSS</p>
                        <p>- Diseño web adaptable</p>
                        <p>- Editor grafico: Photoshop</p>
                        <p>- Version de control: GIT</p>
                    </div>
                    <div className="mx-lg-5">
                        <p>- Javascript + frameworks: React, Vue, Next, Express</p>
                        <p>- Java + Spring</p>
                        <p>- Bases de datos: MySQl, MongoDB</p>
                    </div>
                </div>
            </div>
            <Footer sectionName={name} sectionPage={page} />

        </div>
    )
}

export default Skills
