import React, { useState, useRef , useEffect} from 'react'
import styled from 'styled-components'


const Hero = () => {

    const Stay: string[]=[
        "text-transfrom: uppercase",
        "text-shadow: 10px 10px 10px 0px #7c2f2f",
        "font-size: 65px",
        "transition: all 350ms"
    ]
    let Stay_ref : any=useRef()

    const[color, setColor] =useState(0)

    useEffect(()=> {
        Stay_ref.current.style = Stay[color % Stay.length]
    })
    useEffect(()=> {
        setInterval(()=> {
            setColor((el) => el + 2)
        }, 5000)
    }, [])

  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <H1 ref = {Stay_ref}>Stay Curious.</H1>
                    <H4>Discover Stories, thinking, and expertise from writers on any topic.</H4>
                    <Button1>Start Reading</Button1>
                    </Left> 
                    <Right>
                        <Letter>
                            <H3>MMM MMM MMMM M</H3>
                            <H3>M M M M M M M M M MM MMM MMMM M</H3>
                            <H3>M M M M M M M M M M M MMM     MMMMM M M M M M MM MMM MMMM M</H3>
                            <H3>M M M M M M M M M M M M M   M M MMM M MMMMM M M M M M</H3>
                            <H3>M M M M MM M M MMM M M MM MMM M M MMM  M M M M M M M M M M M M M M</H3>
                            <H3>M M M M MM M M MMM M M MM MMM M M MMM  M M M M M M MMM MMMMM M MMM M M M M M M M</H3>
                            <H3>MMMM M M MMM  M M M M M M M M M M</H3>
                            <H3>MMMM M M MMM  M M MMMM  MMMM  MM M M M M M M M</H3>
                            <H3>MMMM M M MMM  M M MMMM  MMMM  MM M M M M M M M M  M M M M M</H3>
                        </Letter>
                        </
                    Right>              
            </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;
const H3 = styled.h3`
font-size: 20px;
color: black;
text-align: center;
margin: 0;
text-shadow: 5px 0px 2px 0px "#858585";
`
const Letter = styled.div`
width: 450px;
height: 450px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
const Right = styled.section`
margin-top: 30px;
@media (min-width: 1026px){
max-width: 550px;
width: 50%;
max-height: 600px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

}

`
const Button1 = styled.button`
width: 150px;
height: 50px;
background-color: black;
margin-top: 45px;
border: none;
color: white;
border-radius: 50px;
font-size: 16px;
`
const H4 = styled.h4`
font-size: 24px;
color: black;
font-weight: 400;
line-height: 30px;
margin: 0;
`
const H1 = styled.h1`
font-size: 60px;
margin-bottom: 50px;
color: black;
font-weight: 700;
@media (min-width: 1026px){
    font-size: 75px;
}
`
const Left = styled.section`
width: 100%;
padding-top: 30px;
@media (min-width: 1026px){
width: 40%;
display: flex;
justify-content: center;
flex-direction: column;
}

`
const Wrapper = styled.main`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 1026px){
    justify-content: space-between;
    }
    
`
const Container = styled.section`
    width: 100%;
    min-height: calc(100vh - 70px);
    height: 100%;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
`