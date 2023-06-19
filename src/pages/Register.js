import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lavender;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 350px;
    padding: 20px;
    background-color: white;
    border-radius: 5%;
`
const Titel = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    margin-top: 15px;
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    align-self: center;
  
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Titel>Kreiraj račun</Titel>
            <Form>
                <Input placeholder = "ime" />
                <Input placeholder = "prezime" />
                <Input placeholder = "email" />
                <Input placeholder = "korisničko ime" />
                <Input placeholder = "lozinka" />
                <Input placeholder = "ponovi lozinku" />
                <Button>Kreiraj</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register