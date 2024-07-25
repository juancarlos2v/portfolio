const Introduce = () => {
    const name = "JUAN CARLOS"
    const lastName = "VILCHERREZ"
    const rol = "Desarrollador Full Stack"
    return (
        <>

            <div id="start" className="container  d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-lg-end align-items-center">
                    <h1 className="typewriter text-light d-flex">
                        {name}<span className=" d-md-block d-none"> &nbsp;{lastName}</span>
                    </h1>
                    <h1 className="d-lg-none d-md-none text-light">{lastName} </h1>
                    <p className="rol">{rol}</p>
                </div>
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