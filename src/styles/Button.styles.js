import styled from 'styled-components'

const ButtonAnimation = styled.button`
  border-radius: 0.3rem;
  background-color: transparent;
  transition: all 0.5s ease-out;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blue} 50%,
    transparent 50%
  );
  background-size: 200%;
  background-position: right;
  border: 0.15rem solid ${({ theme }) => theme.colors.blue};

  &:hover {
    background-position: left;
    color: ${({ theme }) => theme.colors.white};
  }
`

export default ButtonAnimation
