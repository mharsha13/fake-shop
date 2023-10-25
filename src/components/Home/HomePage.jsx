import store from '../../assets/store.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ButtonAnimation from '../../styles/Button.styles'

function Home() {
  return (
    <Main>
      <Div>
        <H1>
          Always be, <br /> <Span>different.</Span>
        </H1>
        <Link to="/products">
          <Button>Shop now</Button>
        </Link>
      </Div>
      <ImageWrapper>
        <Image src={store} alt="Store Image" />
      </ImageWrapper>
    </Main>
  )
}

const Main = styled.main`
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template: 1fr / repeat(2, 1fr);

  @media (width < 1024px) {
    grid-template: repeat(2, auto) / 1fr;
  }
`
const Div = styled.div`
  padding: 1rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`
const H1 = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.black};

  @media (width < 900px) {
    font-size: 3.5rem;
  }
  @media (width > 1366px) {
    font-size: 7rem;
  }
`
const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`
const Button = styled(ButtonAnimation)`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem 3rem;
`

const ImageWrapper = styled.div`
  padding: 1rem;
  `
const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default Home
