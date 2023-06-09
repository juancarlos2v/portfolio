const Footer = (props) => {
    return (
        <>
            <div className="w-100 mb-4 text-black-light">
                <p>{props.sectionName} </p>
                <p>{props.sectionPage}</p>

                <style jsx>{`
                div{
                display:flex;
                justify-content:space-between
                }
                `}</style>
            </div>
        </>
    )
}

export default Footer
