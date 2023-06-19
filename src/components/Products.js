import styled from "styled-components"
import { prod } from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = (kat) => {
  const [proizvodi, setProizvodi] = useState([]);

  useEffect(() =>{
    const getProizvodi = async () =>{
      try{
        const res = await axios.get('http://localhost:3001/api/proizvod')
        setProizvodi(res.data)
      }catch(err){

      }
    }
    getProizvodi()
  },[kat])

  return (
    <Container>
        {prod.map(item => (
            <Product item = {item} key = {item.id} />
        ))}
    </Container>
  )
}

export default Products