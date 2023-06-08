const Skills = () => {
    return (
        <div className="container contenedor-page d-flex flex-column justify-content-between align-items-center">
            < nav >
                <button type="button">X </button>
                <button type="button">ES</button>
            </nav >
            <div className="w-100">
                <h1 className="title">Mis Habilidades</h1>
                <div className="skills d-flex ">
                    <div>
                        <p>- HTML + CSS</p>
                        <p>- Diseño web adaptable</p>
                        <p>- Editor grafico: Photoshop</p>
                        <p>- Version de control: GIT</p>
                    </div>
                    <div className="m">
                        <p>- Javascript + frameworks: React, Vue, Next, Express</p>
                        <p>- Java + Spring</p>
                        <p>- Bases de datos: MySQl, MongoDB</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between w-100">
                <p className="text-footer">HABILIDADES</p>
                <p className="text-light">03</p>
            </div>
            <style jsx>{`
            .skills{
                color:var(--white)
            }
            .m{
                margin-left:7rem
            }
            `}

            </style>
        </div>
    )
}

export default Skills
