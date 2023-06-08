const AboutMe = () => {
    return (

        <div className="container contenedor-page d-flex flex-column justify-content-between align-items-center">
            <nav>
                <button type="button">X </button>
                <button type="button">ES</button>
            </nav>
            <div>
                <h1 className="title">Juan Carlos Vilcherrez</h1>
                <p className="text">Ademas de desarrollador web soy estudiante de Arquitectura
                    en la Universidad de Buenos Aires. <br />
                    Siempre en constante aprendizaje en las ultimas tendencias
                    en tecnologia para mejorar mis habilidades en programación.
                </p>

            </div>
            <div>

            </div>
            <div className="d-flex justify-content-between w-100">
                <p className="text-footer">SOBRE MÍ</p>
                <p className="text-light">02</p>
            </div>

        </div>
    )
}

export default AboutMe
