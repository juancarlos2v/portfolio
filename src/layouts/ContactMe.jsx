import Footer from "@components/Footer";
import Nav from "@components/Nav"
import Inbox from "src/icons/Inbox";
import Phone from "src/icons/Phone";

const ContactMe = () => {
    let name = "contacto";
    let page = "5"
    return (
        <div id="contact" className="container  ">
            <Nav />
            {/* <div className="d-none  flex-column align-items-lg-start col-lg-6 col-md-7 pt-lg-0 p-5  order-lg-1 order-2">
                <h1 className="title">CONTACTAME</h1>

                <input className="col-lg-7" type="text" placeholder="Nombre" />
                <input className="col-lg-7" type="number" placeholder="Telefono" />
                <input className="col-lg-7" type="text" placeholder="Mensaje" />
                <button type="button" className="btn-contact">ENVIAR</button>
            </div> */}
            <div className="text-white d-flex flex-column justify-content-center align-items-center ">
                <p >Si te gusta mi trabajo no dudes en escribirme, </p>
                <p >coordinare un reunion a la brevedad.</p>
                <div className="d-flex flex-row  mt-4 ">
                    <Phone />
                    <p >+54 11 22786758</p>
                </div>
                <div className="d-flex  flex-row mt-2">
                    <Inbox />
                    <p>juanc.vilcherrez@gmail.com</p>
                </div>
            </div>

            <Footer sectionName={name} sectionPage={page} />
        </div >
    )
}

export default ContactMe
