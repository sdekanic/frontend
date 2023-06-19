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
    margin: 15px 0px 15px 0px;
    width: 50%;
    padding: 10px 20px;
    background-color: teal;
    color: white;
    font-size: 18px;
    cursor: pointer;
    align-self: center;
    border-color: lightgray;
`
const Link = styled.a`
  text-align: center;
  cursor: pointer;

  &:hover{
      text-decoration: underline;
    } 
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Titel>Prijavi se</Titel>
            <Form>
                <Input placeholder = "korisničko ime" />
                <Input placeholder = "lozinka" />
                <Button>Prijava</Button>
                <Link>Zaboravili ste lozinku?</Link>
                <Link>Kreiraj novi račun</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login