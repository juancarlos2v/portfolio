import IconBxlGmail from "@icons/IconBxlGmail";
import IconLinkedin from "@icons/IconLinkedin";
import IconWhatsapp from "@icons/IconWhatsapp";

const ContactMe = () => {
    return (
        <div id="contact" className="container-section d-flex flex-column justify-content-between ">

            <div className=" white">
                <h1 >¿Tenés alguna pregunta o propuesta?</h1>
                <h3>Adelante...</h3>
            </div>
            <div className=" row text-light ">
                {/* <a className="white" href="https://wa.me/5491122786758" target="_blank"> <IconWhatsapp />&nbsp; +54 1122786758</a> */}
                <a className="white" href="mailto:juanc.vilcherrez@gmail.com" target="_blank"><IconBxlGmail />&nbsp; juanc.vilcherrez@gmail.com </a>
                <a className="white" href="https://www.linkedin.com/in/juancarlos-vilcherrez" target="_blank"><IconLinkedin />&nbsp;in/juancarlos-vilcherrez</a>
            </div>

            <style jsx>{`
                .container-section{
                    height:100vh;
                }
                
            `}</style>
        </div >
    )
}

export default ContactMe
