import React from "react";
import { StyledInputGroup } from "./styles/input-group-style";
const InputGroup =({children})=>{
    return (
    <StyledInputGroup>
        {children}
    </StyledInputGroup>);
}
export default InputGroup;