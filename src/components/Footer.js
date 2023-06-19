import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: lightcoral;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 15px 0px;
`
const Center = styled.div`
    flex: 1;
    padding: 35px;
    display: flex; 
    flex-direction: column; 
`
const SocilaConteiner = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;;
`
const Socila = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-right: 20px;
    cursor: pointer;
`
const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
`
const Right = styled.div`
    flex: 1;
    padding: 35px;
`
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SODA</Logo>
            <Desc>  Naša misija je biti predvodnik održivog poslovanja te najbolja hrvatska kompanija za zaposlenike, potrošače i kupce!
                    Želimo u svakoj prigodi donosti istinski užitak. 
            </Desc>
        </Left>

        <Center>
            <Title>Zapratite nas</Title>
            <SocilaConteiner>
                <Socila color = "3B5999"> 
                    <Facebook/>
                </Socila>
                <Socila color = "E4405F">
                    <Instagram/>
                </Socila>
                <Socila color = "55ACEE">
                    <Twitter/>
                </Socila>
            </SocilaConteiner>
        </Center>
        
        <Right>
            <Title>Kontakt</Title>
            <ContactItem><Room style={{marginRight:"10px"}} />
                Ul. Sesartići 23a, 21210 Solin
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} />
                +385 21 231 256
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}} />
                info@soda.hr
            </ContactItem>
            
        </Right>
    </Container>
  )
}

export default Footer