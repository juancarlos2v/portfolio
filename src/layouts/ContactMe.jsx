import Footer from "@components/Footer";
import Nav from "@components/Nav"

const ContactMe = () => {
    let name = "contacto";
    let page = "4"
    return (
        <div id="contact" className="container  ">
            <Nav />
            <div className="d-flex row align-items-center">
                <div className="d-flex flex-column align-items-lg-start col-lg-6 col-md-7 pt-lg-0 p-5  order-lg-1 order-2">
                    <h1 className="title">CONTACTAME</h1>

                    <input className="col-lg-7" type="text" placeholder="Nombre" />
                    <input className="col-lg-7" type="number" placeholder="Telefono" />
                    <input className="col-lg-7" type="text" placeholder="Mensaje" />

                    <button type="button" className="btn-contact">ENVIAR</button>
                </div>

                <div className="text-white d-flex flex-column col-lg-6 col-md-5 pt-lg-0 p-5 pb-0 order-lg-2 order-1  ">
                    <p>Si te gusta mi trabajo no dudes en escribirme, coordinare un reunion a la brevedad.</p>
                    <p>MI TELEFONO</p>
                    <p>+54 11 22786758</p>
                    <p>MI E-MAIL</p>
                    <p>juanc.vilcherrez@gmail.com</p>

                </div>
            </div>
            <Footer sectionName={name} sectionPage={page} />
        </div>
    )
}

export default ContactMe
