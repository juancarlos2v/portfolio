import Footer from "@components/Footer";
import Nav from "@components/Nav"

const Skills = () => {

    return (

        <div className="container-exp">
            <p className="mb-5">EXPERIENCIA |</p>
            <div className="d-flex col-12 justify-content-start exp">
                <div className="timeline-circle ">
                    <svg height="100%" width="20">
                        <line x1="10" y1="10" x2="10" y2="100%" stroke="white" strokeWidth="2" />
                        <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                </div>
                <div className="description-exp">
                    <p>DESARROLLADOR FULL STACK | NO COUNTRY</p>
                    <p>2023 - actual</p>
                    <p>Practicas laborales en desarrollo.</p>
                </div>

            </div>
            <div className="d-flex col-12 justify-content-start exp">
                <div className="timeline-circle ">
                    <svg height="100%" width="20">
                        <line x1="10" y1="0" x2="10" y2="100%" stroke="white" strokeWidth="2" />
                        <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                </div>
                <div className="description-exp">
                    <p>DESARROLLADOR FULL STACK | NO COUNTRY</p>
                    <p>2023 - actual</p>
                    <p>Practicas laborales en desarrollo.</p>
                </div>

            </div>

            <style jsx>{`
                .container-exp{
                    padding: var(--padding-desktop);
                    height:100vh;
                    padding-top:10rem;
                }
                
                .container-exp p{
                    color:var(--white)
                }

                .exp{
                    height:9rem;
                }
                .description-exp{
                    margin-left:3rem;
                    height:100%
                }
               
  
                `}</style>
        </div>
    )
}

export default Skills
