import Nav from "@components/Nav"

const ContactMe = () => {
    return (
        <div id="contact" className="container  ">
            <Nav />
            <div className="d-flex row">
                <div className="d-flex flex-column align-items-start col-12 col-md-7 order-md-2">
                    <h1 className="title">CONTACTAME</h1>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Telefono" />
                    <input type="text" placeholder="Mensaje" />
                    <button type="button" className="btn-contact">ENVIAR</button>
                </div>

                <div className="text-white col-12 col-md-5 order-md-1">
                    <p>Si te gusta mi trabajo no dudes en escribirme, coordinare un reunion a la brevedad.</p>
                    <p>MI TELEFONO <br />+54 11 22786758 </p>
                    <p>MI E-MAIL <br />juanc.vilcherrez@gmail.com</p>

                </div>
            </div>
            <div className="footer  row">
                <p className="text-footer col-12">CONTACTO</p>
                <div className="col-12">
                    <a target="_blank" href="https://www.github.com/juancarlos2v">Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/juancarlos-vilcherrez/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
