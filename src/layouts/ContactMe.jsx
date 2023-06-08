const ContactMe = () => {
    return (
        <div className="container contenedor-page d-flex flex-column justify-content-between align-items-center">
            <nav>
                <button type="button">X </button>
                <button type="button">ES</button>
            </nav>
            <div className="d-flex row ">
                <div className="d-flex flex-column align-items-start col-7">
                    <h1 className="title">CONTACTAME</h1>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Telefono" />
                    <input type="text" placeholder="Mensaje" />
                    <button type="button" className="btn-contact">ENVIAR</button>
                </div>

                <div className="text-white col-5">
                    <p>Si te gusta mi trabajo no dudes en escribirme, coordinare un reunion a la brevedad.</p>
                    <p>MI TELEFONO <br />+54 11 22786758 </p>
                    <p>MI E-MAIL <br />juanc.vilcherrez@gmail.com </p>

                </div>
            </div>
            <div className="d-flex justify-content-between w-100">
                <p className="text-footer">CONTACTO</p>
                <div>
                    <a href="https://www.github.com/juancarlos2v">Github</a>
                    <a href="https://www.linkedin.com/juancarlos-vilcherrez">Linkedin</a>
                </div>
            </div>

        </div>
    )
}

export default ContactMe
