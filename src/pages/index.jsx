import Main from "@components/Main";
import AboutMe from "@layouts/AboutMe"
import ContactMe from "@layouts/ContactMe"
import Introduce from "@layouts/Introduce"
import Projects from "@layouts/Projects"
import Skills from "@layouts/Skills"

const index = () => {
    return (
        <div className="page" >
            <div className="bg"></div>
            <Main />
            <Introduce />
            <AboutMe />
            <Skills />
            {/* <Projects />
            <ContactMe /> */}
        </div>
    )
}

export default index
