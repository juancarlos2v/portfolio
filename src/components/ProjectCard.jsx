import { Col, Row, Stack } from "react-bootstrap"

const ProjectCard = ({ id, name, description, code, deploy, image }) => {
    return (
        <div className="container-project d-flex flex-column col-10" key={id}>
            <div
                className="image-project col-12"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,3)), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    filter: 'grayscale(100%)'
                }}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}

            >
                {/* <span className="badge">0{id}</span> */}
                <h4 className="title d-flex align-items-end  h-100 p-4 text-light " >{name} </h4>
            </div>
            <Row className="justify-content-start" >
                <Col sm={2} className="d-flex justify-content-start"><a href={code} target="_blank">{`Code`} </a></Col>
                <Col sm={3} className="d-flex justify-content-start"><a href={deploy} target="_blank">Preview</a></Col>

            </Row>
            <style jsx>{`
            .title{
                position: relative;
                    z-index: 2; 
            }
                .image-project{ 
                    position: relative;
                    height:310px;
                    //width:250px;
                    background-color:var(--white-two);
                    z-index:0,
                    transition: filter 0.5s ease,

                }
                .image-project::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 60%;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
                    transition: height 0.5s ease;
                    z-index: 1;
                }

                .image-project:hover::after {
                    height: 0;
                }
                .container-project{
                    margin-top:4rem
                }
                .container-project a{
                    color:var(--black);
                }
                .badge {
                    position: absolute;
                    top: -40px;
                    right: 10px;
                    color: var(--white-two);
                    font-size: 4rem;
                    padding: 0.5rem;
                    font-family: "IBM Plex Mono", monospace;
                
                }
        `}</style>
        </div>

    )
}

export default ProjectCard
