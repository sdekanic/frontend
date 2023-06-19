import { Home, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: black;
    color: white;
`  
const Heading = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flax;
    align-items: center;
`

const HomeIcons = styled.span`
    display: flax;
    padding-top: 5px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    font-family: Arial;
    
`
const Logo =styled.h1`
    font-weight: bold;
`
const Rigth = styled.div`
    flex: 1;
    display: flax;
    align-items: center;
    justify-content: flex-end;
`
const Items = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    font-family: Arial;
    padding-top: 5px;
`

const Navbar = () => {
  return (
    <Container>
        <Heading>
            <Left>
                <HomeIcons>
                    <Home/>
                </HomeIcons>
            </Left>

            <Center>
                <Logo>SODA</Logo>
            </Center>

            <Rigth>
                <Items>REGISTRACIJA</Items>
                <Items>PRIJAVA</Items>
                <Items>
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </Items>
            </Rigth>
        </Heading>
    </Container>
  )
}

export default Navbar