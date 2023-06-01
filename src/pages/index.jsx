import AboutMe from "@layouts/AboutMe"
import ContactMe from "@layouts/ContactMe"
import Introduce from "@layouts/Introduce"
import Projects from "@layouts/Projects"

const index = () => {
    return (
        <>
            <Introduce />
            <AboutMe />
            <Projects />
            <ContactMe />
        </>
    )
}

export default index
