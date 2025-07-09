import SectionLink from "@components/SectionLink"
import { Link } from "react-scroll"

const Introduce = () => {
    const name = "Juan Carlos"
    const lastName = "Vilcherrez"
    const rol = "Desarrollador Full Stack"
    const description = "Construyendo código. Diseñando espacios.\n Explorando el futuro de la tecnología y la creatividad.\n Transformando ideas en experiencias."
    return (
        <>

            <div id="start" className="container-ntr p-lateral  d-flex flex-column justify-content-center align-items-start">
                <div className="d-flex flex-column align-items-start col-10">
                    <span className="mb-2" style={{ color: 'var(--black-light)' }}>{`${name} ${lastName}`}</span>
                    <h2 className=" text-light">{description} </h2>
                </div>
                <p className="mt-4">Mirá en qué estoy <SectionLink to='projects' >
                    <span style={{ textDecorationLine: 'underline' }}>
                        trabajando actualmente ⟶
                    </span>
                </SectionLink></p>

            </div>
            <div
                style={{
                    width: '100vw', // ocupa todo el ancho de la pantalla
                    height: '10rem', // altura ajustable
                    backgroundColor: 'var(--white)',
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                }}
            ></div>
            <style jsx>{`
                .container-ntr{
                    height:30rem;
                }
                p{
                    color:var(--white);
                    font-size:18px
                }
                `}</style>
        </>
    )
}

export default Introduce;