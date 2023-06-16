import AboutMe from "@layouts/AboutMe"
import ContactMe from "@layouts/ContactMe"
import Introduce from "@layouts/Introduce"
import Projects from "@layouts/Projects"
import Skills from "@layouts/Skills"

const index = () => {
    return (
        <>
            <Introduce />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </>
    )
}

export default index
