import styled from "@emotion/styled";
import { colors } from "../constants/colors";

export const InputText = styled.input(() => ({
    width: '145px',
    height: '44px',
    flexShrink: 0,
    borderRadius: '5px',
    border: `2px solid ${colors.borderColor}`,
    background: '#F6F6FB',
    paddingLeft: '8px',
    fontSize: '16px',
    outline: 'none',
    color: '#333',
    
    '&::placeholder': {
      color: colors.borderColor,
    },

    '&:focus': {
      borderColor: colors.focusBorderColor,
      boxShadow: `0 0 0 2px rgba(63, 72, 173, 0.3)`,
    },

    '@media (max-width: 600px)': {
       width: '100%',
       height: '40px',
       paddingLeft: '12px',
       fontSize: '14px',
    },
}));