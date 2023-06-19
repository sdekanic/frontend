
import styled from "styled-components"
import {
  Link
} from "react-router-dom";


const Container = styled.div`
    flex: 1;
    margin: 10px;
    margin-bottom: 100px;
    height: 25vw;
    position: relative;
    background-color: lightgray;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

`
const Title = styled.h1`
    font-size: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`

const CategoyItem = ({item}) => {
  return (
    <Container>
      <Link to={`/proizvodi/${item.title}`}>
        <Image src={item.img} />
      </Link> 
        <Title>{item.title}</Title>  
    </Container>
  )
}

export default CategoyItem