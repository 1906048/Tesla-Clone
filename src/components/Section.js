import React from 'react'
import styled from 'styled-components'
import  Fade  from 'react-reveal/Fade';

function Section(props) {
  return (
    <div>
      <Wrap bgImage = {props.imageName} >
         <Fade bottom>
        <ItemText>
            <h1>{props.modelName}</h1>
            <p>{props.description}</p>
        </ItemText>
        </Fade>

        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
            {props.leftButtonText}
            </LeftButton>

            { props.rightButtonText && 
            <RightButton>
            {props.rightButtonText}
            </RightButton>
            }
            
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
      </Wrap>
    </div>
  )
}

export default Section

const Wrap = styled.div`
   width : 100vw;
   height : 100vh;
   background-size: cover;
   background-position: centre;
   background-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-image : ${props => `url("images/${props.bgImage}")`}
`

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
   z-index: -1;
`
const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px) {
    flex-direction: column;
   }
`
const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 8px;
`
const RightButton = styled(LeftButton)`
   background: white;
   opacity: 0.65;
   color: black;
`

const DownArrow = styled.img`
   height: 40px;
   overflow-x: hidden;
   animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``