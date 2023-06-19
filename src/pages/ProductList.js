import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
` 
const ProductList = () => {
  const lokacija = useLocation();
  const kat = lokacija.pathname.split('/')[2]
  return (
    <Container>
        <Navbar/>
        <Title>{kat}</Title>
        <Products kat={kat}/>
        <Footer />
    </Container>
  )
}

export default ProductList