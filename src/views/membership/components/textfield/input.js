import React from "react";
import {StyledInput} from './styles/input-style'
// type,label,id,hint,onChange
const Input =({...props})=>{
    return (
    
    <StyledInput {...props} />
    )
}
export default Input;