import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'



const Container =styled.div`
`
const Wrapper =styled.div`
    padding: 20px;
`
const Title =styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopBottom =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 25px;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const Img = styled.img`
    width: 200px;
    margin-top: 20px;
    margin-left: 25px;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Details = styled.div`
    padding: 20px;
    margin-top: 100px;
    flex-direction: column;
    justify-content: space-around;
`

const ProdName = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
`
const ProdID = styled.span`
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const ProdAmountC = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProdAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProdPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const STitle = styled.h1`
    font-weight: 200;
`
const SItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SItemText = styled.span`
`
const SItemPrice = styled.span`
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    cursor: pointer;
    background-color: black;
    color:white;
    font-weight: 600;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Košarica</Title>
            <Top>
                <TopBottom>Nastavi kupnju</TopBottom>
                <TopBottom  type="filled">Idi na plaćanje</TopBottom>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Img src= {require("../images/Karlovacko.jpg")}/>
                            <Details>
                                <ProdName><b>Proizvod:</b> Karlovačko</ProdName>
                                <ProdID><b>ID: </b>16486165168</ProdID>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProdAmountC>
                                <Remove />
                                <ProdAmount>2</ProdAmount>
                                <Add />
                            </ProdAmountC>
                            <ProdPrice>2 €</ProdPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <STitle>Narudžba</STitle>
                    <SItem>
                        <SItemText>Cijena proizvoda</SItemText>
                        <SItemPrice>2 €</SItemPrice>
                    </SItem>
                    <SItem>
                        <SItemText>Dostava</SItemText>
                        <SItemPrice>3 €</SItemPrice>
                    </SItem>
                    <SItem type="total">
                        <SItemText>Ukupno</SItemText>
                        <SItemPrice>5 €</SItemPrice>
                    </SItem>
                    <Button>IDI NA PLAĆANJE</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart