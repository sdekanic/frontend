import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: lightcoral;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.smijer === "lijevo" && "10px"};
    right: ${props => props.smijer === "desno" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    margin:20px;
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
   
`;
const Image = styled.img`
    margin-left: 50px;
    margin-top: 25px;
    height: 125%;   
`;

const Info = styled.div`
    flex: 2;
    padding: 25px;
    margin-right: 50px;   
`;

const Title = styled.h1`
    font-size: 50px;
    color: red;
`;
const Decsription = styled.p`
    margin: 50px 0px;
    margin-right: 100px;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: transparent;
    cursor: pointer;
`;
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handelClick = (direction) => {

        if(direction==="lijevo"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow smijer="lijevo" onClick={()=>handelClick("lijevo")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide key = {item.id}>
            <ImgContainer>
                <Image src={item.img}/>
            </ImgContainer>
            <Info>
                <Title>{item.title}</Title>
                <Decsription>{item.desc}</Decsription>
                <Button>ISTRAŽITE</Button>
            </Info>
            </Slide>
            ))}
        </Wrapper>
        <Arrow smijer="desno" onClick={()=>handelClick("desno")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider