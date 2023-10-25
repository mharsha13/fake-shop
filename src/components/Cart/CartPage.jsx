import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import formatString from '../../util/utils.jsx'
import { useOutletContext } from 'react-router-dom'
import ButtonAnimation from '../../styles/Button.styles.js'
import EmptyCart from './EmptyCart.jsx'

function Cart() {
  const [cartItems, checkout, removeFromCart, addToCart] = useOutletContext()
  const totalPrice = cartItems.reduce(
    (total, item) => (total += item.product.price * item.count),
    0
  )

  if (cartItems.length === 0) return <EmptyCart />

  const cart = cartItems.map((obj) => (
    <CartItem key={obj.product.id}>
      <ImageWrapper>
        <Image src={obj.product.image} alt={obj.product.title} />
      </ImageWrapper>
      <Info>
        <p>{formatString(obj.product.title)}</p>
        <p>$ {obj.product.price.toFixed(2)}</p>
        <Quantity>
          <Button onClick={() => removeFromCart(obj.product)}>
            {<RemoveIcon />}
          </Button>
          <p>{obj.count}</p>
          <Button onClick={() => addToCart(obj.product)}>{<AddIcon />}</Button>
        </Quantity>
      </Info>
    </CartItem>
  ))

  return (
    <Main>
      <CartContainer>{cart}</CartContainer>
      <Div>
        <p>Total: $ {totalPrice.toFixed(2)}</p>
        <BtnCheckout onClick={checkout}>Checkout</BtnCheckout>
      </Div>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto;
`

const CartContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem 2rem;
  height: max-content;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  @media (width >= 600px) {
    padding: 1rem 4rem;
  }
`
const Div = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.colors.blue};
`
const BtnCheckout = styled(ButtonAnimation)`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
`

const CartItem = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  height: max-content;
  border-radius: 0.5rem;
  grid-template-columns: auto 1fr;
  background-color: ${({ theme }) => theme.colors.white};
`

const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin: auto;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
`
const Quantity = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
`
const Button = styled.button`
  border: none;
  display: flex;
  padding: 0.2rem;
  align-items: center;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};

  &:active {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export default Cart
