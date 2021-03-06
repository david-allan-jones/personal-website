import { Container } from '@material-ui/core'
import LandingCarousel from './sections/LandingCarousel/LandingCarousel'
import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'

function App() {
  return (
    <Container>
      <LandingCarousel />
      <Introduction />
      <ExperiencePanel />
      <EducationPanel />
      <LinksPanel />
    </Container>
  )
}

export default App