import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const OverlayDialog = styled.div(() => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.30)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const DialogStyledComponent = styled.div(() => ({
  width: '90vw',
  maxWidth: '1041px',
  height: '300px',
  borderRadius: '8px',
  background: colors.white,
  padding: '0 50.82px',
  boxSizing: 'border-box' as const,
  position: 'relative' as const,
  display: 'flex'as const,
  flexDirection: 'column'as const,
  "@media (max-width: 768px)": {
    width: '95vw',
  }
}));

export const DialogTitleWrapper = styled.div(() => ({
  paddingTop: '43.8px',
  display: 'flex',
  alignItems: 'center',
  height: '45px',
  flexShrink: 0,  
  marginLeft: '20px',
  position: 'relative' as const  
}));


export const CloseButton = styled.div(() => ({
  position: 'absolute' as const,
  top: '5.79px',
  right: '-40px',
  background: 'transparent',
  border: 'none',
  color: '#333',
  cursor: 'pointer',
  zIndex: 10,
  
  '&:hover': {
    color: '#e74c3c',
  },
}));

export const DialogTitle = styled.div(() => ({
  color: colors.darkBlue,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Raleway',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '140%',
}));

export const AddNewProcedureButton = styled.div(() => ({
  color: colors.green,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '150%',
  cursor: 'pointer'
}));

export const DialogBody = styled.div(() => ({
  maxWidth: "100%",
  margin: '0 auto',
  overflow: 'hidden',
}));

export const DialogTable = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  width: '100%',
  maxHeight: '215px',
  overflowY: 'auto' as const,
}));
