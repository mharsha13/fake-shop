import styled from 'styled-components'
import loading from '../../assets/loading.svg'

const Loading = () => {
  return (
    <main>
      <ImageWrap>
        <Image src={loading} alt="Loading Image" />
      </ImageWrap>
    </main>
  )
}

const ImageWrap = styled.div`
  top: 50%;
  width: 6rem;
  margin: auto;
  padding: 1rem;
  position: relative;
  transform: translateY(-50%);
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default Loading
