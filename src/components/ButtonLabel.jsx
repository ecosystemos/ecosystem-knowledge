import React from 'react'
import styled from "styled-components";

import PropTypes from 'prop-types';




export const ButtonLabel = ({buttonText,buttonWidth,buttonHeight,buttonColor,textFontSize,...args}) => {

    const ButtonWrapper = styled.section`

align-items: center;
padding: 12px 24px;
display: flex;
flex-direction: row;
text-align:center;
font-size:${textFontSize};



width: ${buttonWidth};
height: ${buttonHeight};
left: 0px;
top: 200px;

/* Primary/600 */
color: white;
background: ${buttonColor} ;
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


    return (
       
        <button> <ButtonWrapper>{buttonText}</ButtonWrapper></button>

    )
}

ButtonLabel.propTypes = {
    buttonColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonWidth: PropTypes.string.isRequired,
    buttonWheight: PropTypes.string.isRequired,
    textFontSize: PropTypes.string.isRequired,
    
    
    
};


export default ButtonLabel;
