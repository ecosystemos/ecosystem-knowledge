import React from 'react'
import styled from "styled-components";

const ButtonWrapper = styled.section`

align-items: center;
padding: 12px 24px;
display: flex;
flex-direction: row;

padding: 12px 24px;

position: static;
width: 135px;
height: 40px;
left: 0px;
top: 200px;

/* Primary/600 */

background: #0E5E81;
/* Button 1 */

box-shadow: 0px 4px 8px rgba(34, 44, 47, 0.16);
border-radius: 32px;

/* Inside Auto Layout */

flex: none;
order: 3;
flex-grow: 0;
margin: 16px 0px;

&:hover {
    background-color: white;
    color: black;
}

`;

const ButtonLabel = () => {
    return (
       
        <button> <ButtonWrapper>Sign me up!</ButtonWrapper></button>

    )
}

export default ButtonLabel;
