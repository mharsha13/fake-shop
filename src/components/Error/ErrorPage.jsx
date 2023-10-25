import styled from 'styled-components'
import { Link } from 'react-router-dom'
import error from '../../assets/error.svg'
import ButtonAnimation from '../../styles/Button.styles.js'

function ErrorPage() {
  return (
    <>
      <div></div>
      <Main>
        <ImageWrapper>
          <Image src={error} alt="Error Image" />
        </ImageWrapper>
        <h2>Page Not Found</h2>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Main>
    </>
  )
}

const Main = styled.main`
  display: flex;
  gap: 1rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const ImageWrapper = styled.div`
  width: 30vw;
  height: auto;

  @media (width < 600px) {
    width: 60vw;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled(ButtonAnimation)`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem 2rem;
`

export default ErrorPage
