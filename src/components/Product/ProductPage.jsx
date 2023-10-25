import styled from 'styled-components'
import Loading from '../Loading/Loading.jsx'
import formatString from '../../util/utils.jsx'
import { useOutletContext } from 'react-router-dom'

function Products() {
  const [nr1, nr2, nr3, addToCart, products] = useOutletContext()

  if (products.length === 0) return <Loading />

  const product = products.map((item) => (
    <Product key={item.id}>
      <ImageWrapper>
        <Image src={item.image} alt={item.title} />
      </ImageWrapper>
      <Details>
        <p>{formatString(item.title)}</p>
        <p>${item.price.toFixed(2)}</p>
        <Button onClick={() => addToCart(item)}>Add to cart</Button>
      </Details>
    </Product>
  ))

  return <ProductWrapper>{product}</ProductWrapper>
}

const ProductWrapper = styled.main`
  display: grid;
  gap: 2rem;
  padding: 1rem 2rem;
  height: max-content;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (width > 600px) {
    padding: 1rem 4rem;
  }
`

const Product = styled.div`
  display: grid;
  border-radius: 0.5rem;
  grid-template: 1fr / auto 1fr;
  background-color: ${({ theme }) => theme.colors.white};
`

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;
  padding: 1rem;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Details = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
`
const Button = styled.button`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};

  &:active {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export default Products
