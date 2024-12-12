import styled from '@emotion/styled';

export const ContainerNoClients = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  width: '90vw',   
  maxWidth: '328px',  
  height: '356px',
  padding: '0px 16px',
  gap: '20px',
  flexShrink: 0,
  position: 'fixed' as const,   
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box' as const,  
}));

export const Image = styled.img(() => ({  
  width: '134px',
  height: '134px',
  flexShrink: 0,
}));

export const SubTitleICon = styled.img(() => ({  
  width: '15.82px',
  height: '15.811px',
  flexShrink: 0,  
  marginRight: '6px'
}));

export const Label = styled.p(() => ({
  textAlign: 'center' as const,
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '0.15px',
}));

