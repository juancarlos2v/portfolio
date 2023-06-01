import style from "@styles/introduce.module.scss"

const Introduce = () => {

    return (
        <>
            <div className="d-flex min-vh-100" >
                <div className={style['title']}>
                    <h1>Desarrollador</h1>
                    <h1> Full Stack</h1>
                    <button type="button">Contactame</button>
                </div>
                <div className={style['me']} >
                    <h3>Juan C. Vilcherrez</h3>
                    <div className={style.img} ></div>
                </div>
            </div >
        </>
    )

}

export default Introduce;