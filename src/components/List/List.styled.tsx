import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const ListWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column' as const,    
    width: '80vw',
    maxWidth: '941px',
    // height: '78px',
    flexShrink: 0,
    borderRadius: '10px',
    background: colors.white,
    marginTop: '33px',
    boxSizing: 'border-box'as const,
    alignItems: 'center',
    gap: '10px', 
    padding: '20px', 
    
    "@media (max-width: 768px)": {
      width: '75vw',
      height: 'auto',
      padding: '20px',
      flexDirection: 'column'as const,
      gap: '1vw',
    }
  }));
  
  export const ListItemWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column'as const,
    alignItems: 'flex-start',
    gap: '7px',
        
    "@media (max-width: 768px)": {
      flexDirection: 'row'as const, 
      gap: '1vw', 
    }
  }));

export const Wrapper = styled.div(() => ({
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-start'    
}));


export const ListTitle = styled(Typography)(() => ({
    color: colors.gray,
    textAlign: 'right' as const,
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'Raleway',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    role: 'heading',
    ariaLevel: 2,
}));

export const ListLabel = styled(Typography)({
  color: '#000',
  textAlign: 'right',
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Raleway',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal'
});