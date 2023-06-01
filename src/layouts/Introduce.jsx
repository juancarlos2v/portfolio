const Introduce = () => {
    let gretting = "<>HOLA MUNDO</>"
    return (
        <>
            <div >
                <div>
                    <p className="text-light"> {gretting} </p>
                    <p className="title">Me llamo Juan Carlos</p>
                    <p className="title">Desarrollador Full Stack</p>
                    <button>CONTACTAME</button>
                </div>
                <div className="avatar">

                </div>
                <div className="footer">
                    <p className="text-footer">juanc.vilcherrez@gmail.com</p>
                    <div>
                        <a href="https://www.github.com/juancarlos2v">Github</a>
                        <a href="https://www.linkedin.com/juancarlos-vilcherrez">Linkedin</a>
                    </div>
                </div>
                <style jsx>{`
                
                .footer{
                    display:flex;
                    justify-content:space-between   
                }
                .footer>div{
                    display:flex;
                    justify-content:space-between;
                }
                `}</style>
            </div>

        </>
    )

}

export default Introduce;