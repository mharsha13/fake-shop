import logo from '../assets/logo.svg'
import Badge from '@mui/material/Badge'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

function Header({ cartItems }) {
  const totalItems = cartItems.reduce((total, item) => (total += item.count), 0)

  return (
    <HeaderWrapper>
      <Image src={logo} alt="Store Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <Link to="cart">
          {
            <Badge
              badgeContent={totalItems}
              color="primary"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <ShoppingCartOutlinedIcon color="primary" style={Icon} />
            </Badge>
          }
        </Link>
      </Nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: grid;
  padding: 2rem 4rem;
  grid-template: 1fr / repeat(2, 1fr);

  @media (width < 600px) {
    padding: 1rem;
    grid-template: repeat(2, 1fr) / 1fr;
  }
`
const Image = styled.img`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.blue};
`

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;

  @media (width < 600px) {
    gap: 0.5rem;
    justify-content: space-between;
  }
`
const NavLink = styled(Link)`
  border-radius: 0.3rem;
  padding: 0.3rem 0.6rem;
  transition: all 0.5s ease-out;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blue} 50%,
    transparent 50%
  );
  background-size: 200%;
  background-position: right;
  color: ${({ theme }) => theme.colors.black};
  border: 0.15rem solid ${({ theme }) => theme.colors.blue};

  &:hover {
    background-position: left;
    color: ${({ theme }) => theme.colors.white};
  }
`

const Icon = {
  padding: '0.5rem',
  fontSize: '2.5rem',
  borderRadius: '50%',
  backgroundColor: 'white',
}

export default Header
