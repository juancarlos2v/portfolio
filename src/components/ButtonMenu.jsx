const ButtonMenu = () => {

    return (
        <>
            <div className="col-1 btn-menu d-flex flex-column justify-content-between">
                <div className=" col-12 line"></div>
                <div className=" col-12 line"></div>
                <div className=" col-9 line"></div>
            </div>

            <style jsx>{`
            .btn-menu{
                height:1.5rem
            }
            .line{
                border:solid 2px var(--white)
            }
        `}</style>
        </>
    )

}

export default ButtonMenu;