import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

function Contact() {
  return (
    <Main>
      <div>
        <h2>The Best FakeStore Ever</h2>
        <h3>Mvp Colony, Vizag IN</h3>
      </div>
      <Links>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <GitHubIcon color="primary" style={Icon} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <LinkedInIcon color="primary" style={Icon} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <TwitterIcon color="primary" style={Icon} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <InstagramIcon color="primary" style={Icon} />
        </a>
      </Links>
    </Main>
  )
}

const Main = styled.main`
  padding: 1rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const Links = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`
const Icon = {
  fontSize: '2rem',
}

export default Contact
