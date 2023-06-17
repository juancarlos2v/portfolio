import Nav from "@components/Nav";
import SectionLink from "@components/SectionLink";

const Introduce = () => {
    let gretting = "<>HOLA MUNDO</>"
    return (
        <>

            <div className="container col-12">
                <Nav />

                <div className=" d-flex justify-content-lg-between align-items-center ">
                    <div className="typewriter">
                        <p className="text-light"> {gretting} </p>
                        <p className="title">Me llamo Juan Carlos</p>
                        <p className="title">Desarrollador Full Stack</p>
                        <div className="btn-contact">
                            <SectionLink to="contact">CONTACTAME</SectionLink>
                        </div>
                    </div>
                    <div className="avatar" ></div>
                </div>

                <div className="footer d-flex align-items-center flex-wrap">
                    <p className="text-footer col-lg-6 col-md-12">juanc.vilcherrez@gmail.com</p>
                    <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-between">
                        <a target="_blank" href="https://www.github.com/juancarlos2v">Github</a>
                        <a target="_blank" href="https://www.linkedin.com/in/juancarlos-vilcherrez/">Linkedin</a>
                    </div>
                </div>
                <style jsx>{`
                nav{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    color:var(--white);
                }
                nav>button{
                    color:var(--black-light)
                }
                
                .text-light{
                    margin-bottom:1rem !important
                }

                
                `}</style>
            </div >


        </>
    )

}

export default Introduce;