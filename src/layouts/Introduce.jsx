const Introduce = () => {
    let gretting = "<>HOLA MUNDO</>"
    return (
        <>
            <div className="container">
                <nav>
                    <button type="button">X </button>
                    <button type="button">ES</button>
                </nav>

                <div className="container-me">
                    <div>
                        <p className="text-light"> {gretting} </p>
                        <p className="title">Me llamo Juan Carlos</p>
                        <p className="title">Desarrollador Full Stack</p>
                        <button className="btn-contact" type="button">CONTACTAME</button>
                    </div>
                    <div className="avatar">

                    </div>
                </div>

                <div className="footer">
                    <p className="text-footer">juanc.vilcherrez@gmail.com</p>
                    <div>
                        <a href="https://www.github.com/juancarlos2v">Github</a>
                        <a href="https://www.linkedin.com/juancarlos-vilcherrez">Linkedin</a>
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
                .btn-contact{                  
                    border: solid var(--white);
                }
                .text-light{
                    margin-bottom:1rem !important
                }
                .footer{
                    display:flex;
                    justify-content:space-between;
                    padding-bottom:10px
                }
                .footer>div{
                    display:flex;
                    justify-content:space-between;
                    width:20%
                }
                .container{
                    display:flex;
                    flex-direction:column;
                    justify-content: space-between;
                    height:100vh;
                    padding: 0rem 100px 0rem 100px;
                }
                .container-me{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap
                }
                .avatar{
                    width: 150px;
                    height: 150px;
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    border-radius: 50%;
                    background: var(--black-light);
                }
                `}</style>
            </div>

        </>
    )

}

export default Introduce;