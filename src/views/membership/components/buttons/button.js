import React from "react";

import { StyledButton } from "./styles/button-style";

const Button =({children,...props})=>{
    return (
        <StyledButton {...props} >
            {children}
        </StyledButton>
    );
}

export default Button;