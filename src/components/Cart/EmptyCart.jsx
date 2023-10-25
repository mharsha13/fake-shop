import styled from 'styled-components'
import emptyCart from '../../assets/emptyCart.svg'
import ButtonAnimation from '../../styles/Button.styles'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <Main>
      <ImageWrapper>
        <Image src={emptyCart} alt="Empty Cart Logo" />
      </ImageWrapper>
      <div>
        <h3>Your Cart Is Empty</h3>
        <Link to="/products">
          <Button>Shop now</Button>
        </Link>
      </div>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  width: 30vw;
  height: auto;

  @media (width < 600px) {
    width: 60vw;
  }
`
const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Button = styled(ButtonAnimation)`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
`

export default EmptyCart
