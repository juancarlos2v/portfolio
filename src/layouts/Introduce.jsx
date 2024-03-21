// import IconBxlGmail from "@icons/IconBxGmail";
// import IconGithub from "@icons/IconGithub";
// import IconLinkedin from "@icons/IconLinkedin";

const Introduce = () => {
    const name = "JUAN CARLOS VILCHERREZ"
    const rol = "Desarrollador Full Stack"
    return (
        <>

            <div className="container  d-flex flex-column justify-content-center align-items-center">
                {/* <div></div> */}
                <div className="d-flex  flex-column align-items-end">
                    <h1 className="typewriter text-light"> {name} </h1>
                    <p className="rol">{rol} </p>
                </div>
                {/* <div></div> */}
                {/* <div className="icons col-12 d-flex justify-content-center ">
                    <div className="d-flex col-12 justify-content-between">
                        <a target="_blank" href="https://www.github.com/juancarlos2v">
                            <IconGithub />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/juancarlos-vilcherrez/">
                            <IconLinkedin />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/juancarlos-vilcherrez/">
                            <IconBxlGmail />
                        </a>
                    </div>
                </div> */}

            </div>

            <style jsx>{`
                .container{
                    height:100vh;
                }
                .container h1{
                    font-size:45px;
                }

                .rol{
                    font-size:1rem
                } 
                p{
                    color:var(--white);
                    font-size:20px
                }
  
                `}</style>



        </>
    )

}

export default Introduce;