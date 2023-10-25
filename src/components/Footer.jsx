import { styled } from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright © 2023 Mohan Harsha</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 0.5rem;
  text-align: center;
`

export default Footer
