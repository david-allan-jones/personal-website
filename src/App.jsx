import { Container, Divider } from '@material-ui/core'
import LandingCarousel from './sections/LandingCarousel/LandingCarousel'
import Introduction from './sections/Introduction/Introduction'
import ExperiencePanel from './sections/ExperiencePanel/ExperiencePanel'
import EducationPanel from './sections/EducationPanel/EducationPanel'
import LinksPanel from './sections/LinksPanel/LinksPanel'

function App() {
  return (
    <Container>
      <LandingCarousel />
      <Divider />
      <Introduction />
      <Divider />
      <ExperiencePanel />
      <Divider />
      <EducationPanel />
      <Divider />
      <LinksPanel />
    </Container>
  )
}

export default App