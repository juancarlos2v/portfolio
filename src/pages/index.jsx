import Main from "@components/Main";
import AboutMe from "@layouts/AboutMe"
import ContactMe from "@layouts/ContactMe"
import Introduce from "@layouts/Introduce"
import Projects from "@layouts/Projects"
import Resume from "@layouts/Resume"

const index = () => {
    return (
        <div className="page" >
            <div className="bg"></div>
            <Main />
            <Introduce />
            <AboutMe />
            <Resume />
            <Projects />
            <ContactMe />
        </div>
    )
}

export default index
